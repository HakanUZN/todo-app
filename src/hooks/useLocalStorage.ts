import { useEffect, useState } from 'react';

/**
 * State'i otomatik olarak tarayıcının localStorage'ı ile senkronize eden hook.
 * Proje gereksinimindeki "LocalStorage kullanılabilir" notu için bu hook kullanılır.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Depolama dolu veya kullanılamıyor olabilir; sessizce yok say.
    }
  }, [key, value]);

  return [value, setValue] as const;
}
