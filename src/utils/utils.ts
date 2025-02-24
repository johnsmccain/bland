
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number | string) {
  return parseFloat(num.toString()).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function shortenAddress(address: string) {
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
}

export function getActivityType(mode: string) {
  const types: Record<string, string> = {
    '0': 'Investment',
    '1': 'Referral',
    '2': 'ROI',
    '3': 'Salary',
    '4': 'Royalty'
  };
  return types[mode] || 'Unknown';
}

export function formatTimestamp(timestamp: number) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString();
}
