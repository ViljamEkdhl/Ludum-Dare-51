import { writable } from 'svelte/store';

export const betInput = writable(['', false]);
export const walletAmount = writable(100)