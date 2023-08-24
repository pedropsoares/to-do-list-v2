import { useCallback, useState } from "react"

const usePersistedState = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const tasksStorage = localStorage.getItem(key)
    return tasksStorage ? JSON.parse(tasksStorage) : initialValue
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