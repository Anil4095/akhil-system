// src/utils/localStorage.js

// Get data from local storage
export const getLocalStorageData = (key) => {
    return JSON.parse(localStorage.getItem(key)) || [];
  };
  
  // Set data to local storage
  export const setLocalStorageData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  