import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  if (localStorage.getItem("darkMode") === null) {
    localStorage.setItem("darkMode", JSON.stringify(false));
  }

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    // children 에서 darkMode라는 변수를 이용하려면 value에 값을 지정해주면 사용 가능하다
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
