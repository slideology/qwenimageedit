interface EventParams {
    category: string;
    action: string;
    label?: string;
    value?: number;
}

class Analytics {
    private static instance: Analytics;
    private initialized: boolean = false;

    private constructor() {}

    public static getInstance(): Analytics {
        if (!Analytics.instance) {
            Analytics.instance = new Analytics();
        }
        return Analytics.instance;
    }

    public init(): void {
        if (this.initialized) return;
        
        // 确保gtag已定义
        if (typeof window.gtag === 'undefined') {
            console.warn('Google Analytics not loaded');
            return;
        }

        this.initialized = true;
    }

    public pageView(path: string): void {
        if (!this.initialized) this.init();
        
        try {
            window.gtag('config', 'G-C7P3D16R4M', {
                page_path: path
            });
        } catch (error) {
            console.error('Failed to track page view:', error);
        }
    }

    public event({ category, action, label, value }: EventParams): void {
        if (!this.initialized) this.init();
        
        try {
            window.gtag('event', action, {
                event_category: category,
                event_label: label,
                value: value
            });
        } catch (error) {
            console.error('Failed to track event:', error);
        }
    }

    public timing(category: string, variable: string, value: number): void {
        if (!this.initialized) this.init();
        
        try {
            window.gtag('event', 'timing_complete', {
                event_category: category,
                name: variable,
                value: value
            });
        } catch (error) {
            console.error('Failed to track timing:', error);
        }
    }

    public exception(description: string, fatal: boolean = false): void {
        if (!this.initialized) this.init();
        
        try {
            window.gtag('event', 'exception', {
                description: description,
                fatal: fatal
            });
        } catch (error) {
            console.error('Failed to track exception:', error);
        }
    }
}

// 为TypeScript声明全局gtag函数
declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

export const analytics = Analytics.getInstance(); 