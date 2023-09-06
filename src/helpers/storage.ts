import { RootState } from "../store";

export const saveToLicalStorage = (state: RootState) => {
  try {
    const appState = JSON.stringify(state)
    localStorage.setItem('appState', appState)
  } catch (er) {
    console.warn(er)
  }
}

export const loadFromLocalStorage = () => {
  try {
    const appState = localStorage.getItem('appState')
    if (!appState) return undefined
    return JSON.parse(appState)
  } catch (er) {
    console.warn(er)
    return undefined
  }
};