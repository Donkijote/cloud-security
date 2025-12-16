import { useSyncExternalStore } from "react";

import {
  getItem,
  type LocalStorageKeysType,
  subscribe,
} from "../storage/LocalStorage";

export function useLocalStorage(key: LocalStorageKeysType) {
  return useSyncExternalStore(
    subscribe,
    () => getItem(key),
    () => null,
  );
}
