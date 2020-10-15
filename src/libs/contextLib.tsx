import React, { useContext, createContext } from "react";
import { projectInfo, technologies, detailInfo } from '../libs/projectData';

//Context for Authentication
interface IContextProps {
  isAuthenticated: boolean;
  userHasAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext({} as IContextProps);

export const useAppContext = () => {
  return useContext(AppContext);
};

//Context for Projects Data
const infoContext = createContext({});

export const InfoProvider: React.FC = (props: any) => {
  return (
    <infoContext.Provider value = {{projectInfo,
      technologies,
      detailInfo}}>
      {props.children}
    </infoContext.Provider>
  )
}

export const InfoConsumer = infoContext.Consumer;


