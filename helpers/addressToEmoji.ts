function fnv1a(str: string): number {
  let hash = 0x811c9dc5; // offset basis
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    // 32-bit unsigned
    hash = (hash >>> 0) * 0x01000193; // FNV prime
    hash >>>= 0;
  }
  return hash >>> 0;
}

export function addressToEmoji(text: string): string {
  const emojis = [
    "🤖", // robot
    "🦄", // unicorn
    "🍕", // pizza
    "🪩", // disco ball
    "🗿", // моаи
    "🍞", // хлеб (рандом фановость)
    "💃",
    "🪅",
    "🛸",
    "🤯",
    "🤓",
    "🦙",
  ] as const;

  const hash = fnv1a(text);
  const index = hash % emojis.length;
  return emojis[index];
}
