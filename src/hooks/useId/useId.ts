import { useState } from 'react';

const DEFAULT_PREFIX = '$component$';
const uniqueId = {};

const generateUniqueId = (prefix: string): number => {
  if (!uniqueId[prefix]) {
    uniqueId[prefix] = 0;
  }

  return uniqueId[prefix]++;
};

export const useId = (prefix?: string): string => {
  const [id] = useState<number>(() => generateUniqueId(prefix || DEFAULT_PREFIX));

  return `${prefix}${id}`;
};
