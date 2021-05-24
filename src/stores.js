import { writable } from "svelte/store";

/* Game state:
  1. Playing
  2. Lost
  3. Won
*/

export const gameState = writable("playing");
