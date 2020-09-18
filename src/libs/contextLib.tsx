import { useContext, createContext } from "react";

interface IContextProps {
  isAuthenticated: boolean;
  userHasAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext({} as IContextProps);

export const useAppContext = () => {
  return useContext(AppContext);
};
