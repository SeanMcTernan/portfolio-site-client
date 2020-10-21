import React, { useContext, createContext } from "react";
import {
  projectInfo,
  technologies,
  detailInfo,
  projectInfoProp,
  projectInfoProps,
  technoloigiesProps,
} from "../libs/projectData";

//Context for User Authentication & Permissions

interface permissionsProps {
  references: boolean;
  referencesRequested: boolean;
  hiddenrepos: boolean;
  hiddenreposRequested: boolean;
  resume: boolean;
  resumeRequested: boolean;
  permissionsId: number;
}

interface IContextProps {
  userPermissions: permissionsProps;
  isAuthenticated: boolean;
  userHasAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext({} as IContextProps);

export const useAppContext = () => {
  return useContext(AppContext);
};

//Context for Projects Data

interface infoContextProps {
  projectInfo: projectInfoProps;
  technologies: technoloigiesProps;
  detailInfo: projectInfoProp;
}

const infoContext = createContext<Partial<infoContextProps>>({});

export const InfoProvider: React.FC = (props: any) => {
  return (
    <infoContext.Provider value={{ projectInfo, technologies, detailInfo }}>
      {props.children}
    </infoContext.Provider>
  );
};

export const InfoConsumer = infoContext.Consumer;
