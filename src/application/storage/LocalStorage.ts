type Listener = () => void;
const listeners = new Set<Listener>();

export type LocalStorageKeysType = keyof typeof LocalStorageKeys;
export const LocalStorageKeys = {
  GO_BACK_BUTTON: "GO_BACK_BUTTON",
  THEME: "THEME",
} as const;

export function setItem(key: LocalStorageKeysType, value: string) {
  localStorage.setItem(key, value);
  for (const listener of listeners) {
    listener();
  }
}

export function getItem(key: LocalStorageKeysType) {
  return localStorage.getItem(key);
}

export function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
