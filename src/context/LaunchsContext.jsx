import { createContext, useState } from "react";

export const LauchContex = createContext(null);

const LauchProvider = ({ children }) => {
  const [launchs, setLaunchs] = useState(null);

  const [id, setId] = useState(null);
  return (
    <LauchContex.Provider value={{ launchs, setLaunchs, id, setId }}>
      {children}
    </LauchContex.Provider>
  );
};

export default LauchProvider;
