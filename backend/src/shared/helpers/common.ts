export function getErrorMessage(error: unknown): string {
    return error instanceof Error ? error.message : '';
}

export function generateRandomValue(min:number, max: number, numAfterDigit = 0) {
    return +((Math.random() * (max - min)) + min).toFixed(numAfterDigit);
}

export function getRandomItem<T>(items: T[]):T {
    return items[generateRandomValue(0, items.length - 1)];
}
