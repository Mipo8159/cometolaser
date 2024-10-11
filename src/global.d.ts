export {};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void; // Optional gtag function
    dataLayer?: Record<string, any>[]; // Optional dataLayer array
  }
}
