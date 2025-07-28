import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Core Web Vitals monitoring
    const sendToAnalytics = (metric) => {
      // Replace with your analytics service
      console.log('Performance metric:', metric);
    };

    // Cumulative Layout Shift (CLS)
    const observeCLS = () => {
      let clsValue = 0;
      let sessionValue = 0;
      let sessionEntries = [];

      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            const firstSessionEntry = sessionEntries[0];
            const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

            if (sessionValue && 
                entry.startTime - lastSessionEntry.startTime < 1000 &&
                entry.startTime - firstSessionEntry.startTime < 5000) {
              sessionValue += entry.value;
              sessionEntries.push(entry);
            } else {
              sessionValue = entry.value;
              sessionEntries = [entry];
            }

            if (sessionValue > clsValue) {
              clsValue = sessionValue;
              sendToAnalytics({
                name: 'CLS',
                value: clsValue,
                id: 'cls'
              });
            }
          }
        }
      });

      if ('PerformanceObserver' in window) {
        observer.observe({ type: 'layout-shift', buffered: true });
      }
    };

    // First Input Delay (FID)
    const observeFID = () => {
      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          sendToAnalytics({
            name: 'FID',
            value: entry.processingStart - entry.startTime,
            id: 'fid'
          });
        }
      });

      if ('PerformanceObserver' in window) {
        observer.observe({ type: 'first-input', buffered: true });
      }
    };

    // Largest Contentful Paint (LCP)
    const observeLCP = () => {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        sendToAnalytics({
          name: 'LCP',
          value: lastEntry.startTime,
          id: 'lcp'
        });
      });

      if ('PerformanceObserver' in window) {
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
      }
    };

    // Time to First Byte (TTFB)
    const observeTTFB = () => {
      if ('performance' in window && 'getEntriesByType' in performance) {
        const navigation = performance.getEntriesByType('navigation')[0];
        if (navigation) {
          const ttfb = navigation.responseStart - navigation.fetchStart;
          sendToAnalytics({
            name: 'TTFB',
            value: ttfb,
            id: 'ttfb'
          });
        }
      }
    };

    // Initialize observers
    observeCLS();
    observeFID();
    observeLCP();
    observeTTFB();

    // Cleanup function
    return () => {
      // Observers will be garbage collected
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
