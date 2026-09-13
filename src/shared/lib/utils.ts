import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fitGridColumns(count: number = 4, index?: number) {
  const topCount = Math.ceil(count / 2);
  const bottomCount = Math.floor(count / 2);

  return {
    total: topCount * bottomCount,
    span: index && index < topCount ? bottomCount : topCount,
  };
}
