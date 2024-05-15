import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `;
// Function to set theme mode
export const setThemeMode = (mode) => {
  localStorage.setItem('theme', mode);
};

// Function to retrieve theme mode
export const getThemeMode = () => {
  return localStorage.getItem('theme') || 'light'; // Default to light mode if not set
};