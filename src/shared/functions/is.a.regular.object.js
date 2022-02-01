export const isARegularObject = value => typeof value === 'object' && !Array.isArray(value) && value !== null;
