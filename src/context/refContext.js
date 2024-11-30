import { useState, createContext, useContext } from "react";

const scrollContext = createContext();

const ScrollProvider = ({ children }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <scrollContext.Provider value={[value, setValue]}>
        {children}
      </scrollContext.Provider>
    </div>
  );
};
const useScroll = () => useContext(scrollContext);
export { useScroll, ScrollProvider };
