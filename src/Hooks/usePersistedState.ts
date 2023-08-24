import { useCallback, useState } from "react"

const usePersistedState = <T>(key: string, defaultValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const tasksStorage = localStorage.getItem(key)
    return tasksStorage ? JSON.parse(tasksStorage) : defaultValue
  })

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      console.log(storedValue);

      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      localStorage.setItem(key, JSON.stringify(valueToStore))
    },
    [storedValue],
  )

  return [storedValue, setValue] as const;
};

export default usePersistedState