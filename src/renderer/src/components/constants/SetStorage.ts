import { LOCAL_STORAGE_KEYS } from '@renderer/components/constants/Global'

export const getAuthToken = () => {
  return localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN) ?? ''
}

export const setToStorage = (key: LOCAL_STORAGE_KEYS, token: string) => {
  localStorage.setItem(key, token)
}

export const getFromStorage = (key: LOCAL_STORAGE_KEYS) => {
  return localStorage.getItem(key) ?? ''
}

export const clearStorage = (key?: LOCAL_STORAGE_KEYS) => {
  if (key) {
    localStorage.removeItem(key)
  } else {
    for (const keys in LOCAL_STORAGE_KEYS) {
      localStorage.removeItem(LOCAL_STORAGE_KEYS[keys])
    }
  }
}
