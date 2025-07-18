import { analytics } from './analytics';

// 为Web Vitals定义类型
interface LayoutShift {
    value: number;
    hadRecentInput: boolean;
    startTime: number;
}

class PerformanceMonitor {
    private static instance: PerformanceMonitor;
    private initialized: boolean = false;

    private constructor() {}

    public static getInstance(): PerformanceMonitor {
        if (!PerformanceMonitor.instance) {
            PerformanceMonitor.instance = new PerformanceMonitor();
        }
        return PerformanceMonitor.instance;
    }

    public init(): void {
        if (this.initialized) return;
        
        // 监听性能指标
        this.observeLoadingMetrics();
        this.observeLargestContentfulPaint();
        this.observeFirstInputDelay();
        this.observeCumulativeLayoutShift();
        
        this.initialized = true;
    }

    private observeLoadingMetrics(): void {
        // 页面加载性能
        window.addEventListener('load', () => {
            setTimeout(() => {
                const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
                if (navigation) {
                    analytics.timing('Page Load', 'DOM Content Loaded', navigation.domContentLoadedEventEnd);
                    analytics.timing('Page Load', 'Load Complete', navigation.loadEventEnd);
                }
            }, 0);
        });
    }

    private observeLargestContentfulPaint(): void {
        // 最大内容渲染时间
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            analytics.timing('Web Vitals', 'Largest Contentful Paint', lastEntry.startTime);
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    private observeFirstInputDelay(): void {
        // 首次输入延迟
        const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                const fid = entry as PerformanceEventTiming;
                analytics.timing('Web Vitals', 'First Input Delay', fid.processingStart - fid.startTime);
            });
        });
        
        observer.observe({ entryTypes: ['first-input'] });
    }

    private observeCumulativeLayoutShift(): void {
        // 累积布局偏移
        let cumulativeScore = 0;
        
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                const cls = entry as unknown as LayoutShift;
                if (!cls.hadRecentInput) {
                    cumulativeScore += cls.value;
                    analytics.timing('Web Vitals', 'Cumulative Layout Shift', cumulativeScore);
                }
            }
        });
        
        observer.observe({ entryTypes: ['layout-shift'] });
    }

    public trackResourceTiming(): void {
        const resources = performance.getEntriesByType('resource');
        
        resources.forEach(resource => {
            const timing = resource as PerformanceResourceTiming;
            analytics.timing('Resource', timing.name, timing.duration);
        });
    }

    public clearMetrics(): void {
        performance.clearMarks();
        performance.clearMeasures();
        performance.clearResourceTimings();
    }
}

export const performanceMonitor = PerformanceMonitor.getInstance(); 