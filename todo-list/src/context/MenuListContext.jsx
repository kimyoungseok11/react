import { createContext, useState } from "react";

export const MenuListContext = createContext();
export function MenuListProvider({ children }) {
  const [menuNumber, setMenuNumber] = useState("1");
  const changeMenuNumber = (number) => {
    setMenuNumber(number);
  };
  return (
    <MenuListContext.Provider value={{ menuNumber, changeMenuNumber }}>
      {children}
    </MenuListContext.Provider>
  );
}
