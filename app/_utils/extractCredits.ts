import { Location } from '@/app/types';

export interface Credit {
  name: string;
  url: string;
}

export function extractCredits(location: Location): Credit[] {
  const credits: Credit[] = [];

  // Recursively search for credit objects
  function findCredits(obj: unknown) {
    if (!obj || typeof obj !== 'object') return;

    // Type guard to ensure obj is an object
    const objectValue = obj as Record<string, unknown>;

    // Check if current object is a credit object
    if (
      objectValue.name &&
      objectValue.url &&
      typeof objectValue.name === 'string' &&
      typeof objectValue.url === 'string'
    ) {
      // If it has exactly the credit shape, add it
      if (
        Object.keys(objectValue).length === 2 ||
        (Object.keys(objectValue).length === 2 && 'name' in objectValue && 'url' in objectValue)
      ) {
        credits.push({ name: objectValue.name, url: objectValue.url });
        return; // Don't traverse deeper if we found a credit
      }
    }

    // Recursively search in all object properties
    if (objectValue) {
      for (const key in objectValue) {
        if (Object.prototype.hasOwnProperty.call(objectValue, key)) {
          findCredits(objectValue[key]);
        }
      }
    }

    // Handle arrays
    if (Array.isArray(objectValue)) {
      objectValue.forEach(item => findCredits(item));
    }
  }

  findCredits(location);

  // Remove duplicates
  return credits.filter(
    (credit, index, self) =>
      index === self.findIndex(c => c.name === credit.name && c.url === credit.url)
  );
}
