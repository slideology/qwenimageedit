import React, { useEffect, useRef, useState } from 'react';
import { analytics } from '../utils/analytics';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    placeholderSrc?: string;
    threshold?: number;
    rootMargin?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
    src,
    alt,
    placeholderSrc = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E',
    threshold = 0.01,
    rootMargin = '50px',
    className,
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(placeholderSrc);
    const imgRef = useRef<HTMLImageElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        let startTime: number;

        const loadImage = (imageUrl: string): Promise<string> => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                startTime = performance.now();
                
                img.onload = () => {
                    const loadTime = performance.now() - startTime;
                    analytics.timing('Image', 'Load Time', loadTime);
                    resolve(imageUrl);
                };
                
                img.onerror = () => {
                    analytics.event({
                        category: 'Error',
                        action: 'Image Load Failed',
                        label: imageUrl
                    });
                    reject(new Error(`Failed to load image: ${imageUrl}`));
                };
                
                img.src = imageUrl;
            });
        };

        const onIntersect: IntersectionObserverCallback = async (entries) => {
            const [entry] = entries;
            
            if (entry.isIntersecting) {
                try {
                    const loadedSrc = await loadImage(src);
                    setCurrentSrc(loadedSrc);
                    setIsLoaded(true);
                    
                    // 清理observer
                    if (observerRef.current && imgRef.current) {
                        observerRef.current.unobserve(imgRef.current);
                    }
                } catch (error) {
                    console.error('Failed to lazy load image:', error);
                }
            }
        };

        // 创建IntersectionObserver
        if ('IntersectionObserver' in window) {
            observerRef.current = new IntersectionObserver(onIntersect, {
                threshold,
                rootMargin
            });
            
            if (imgRef.current) {
                observerRef.current.observe(imgRef.current);
            }
        } else {
            // 降级处理：直接加载图片
            loadImage(src)
                .then((loadedSrc) => {
                    setCurrentSrc(loadedSrc);
                    setIsLoaded(true);
                })
                .catch(console.error);
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [src, threshold, rootMargin]);

    return (
        <img
            ref={imgRef}
            src={currentSrc}
            alt={alt}
            className={`transition-opacity duration-300 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className || ''}`}
            {...props}
        />
    );
}; 