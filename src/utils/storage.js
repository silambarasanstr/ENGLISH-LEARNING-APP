export const getStorageItem = (key, defaultValue) => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading ${key} from LocalStorage:`, error);
    return defaultValue;
  }
};

export const setStorageItem = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing ${key} to LocalStorage:`, error);
  }
};

export const STORAGE_KEYS = {
  PROGRESS: 'eng_learning_progress',
  INTERVIEWS: 'eng_learning_scheduled_interviews',
  SAVED_QUESTIONS: 'eng_learning_saved_questions',
};
