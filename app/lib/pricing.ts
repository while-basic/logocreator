// Pricing based on Together AI's FLUX model pricing
// https://api.together.xyz/playground/pricing

export function calculatePrice(imageSize: string): number {
    const [width, height] = imageSize.split('x').map(Number);
    const pixelCount = width * height;
    
    // FLUX.1.1-pro pricing per 1M pixels
    const pricePerMillionPixels = 0.0025;
    
    // Calculate price based on pixel count
    const price = (pixelCount / 1000000) * pricePerMillionPixels;
    
    // Round to 4 decimal places
    return Math.round(price * 10000) / 10000;
}

export function formatPrice(price: number): string {
    return `$${price.toFixed(4)}`;
}
