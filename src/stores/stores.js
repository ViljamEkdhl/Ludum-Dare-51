import { writable } from 'svelte/store';

export const betInput = writable(0);
export const walletAmount = writable(100);
export const timer = writable(10)