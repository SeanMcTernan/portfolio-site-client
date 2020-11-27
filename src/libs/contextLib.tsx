import React, { useContext, useState, createContext } from "react";
import {
  projectInfo,
  technologies,
  projectInfoProp,
  projectInfoProps,
  technologiesProps,
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
  technologies: technologiesProps;
  setProjectID: any;
  projectID: number;
}

const infoContext = createContext<Partial<infoContextProps>>({});

export const InfoProvider: React.FC = ({ ...props }) => {
  var [projectID, setProjectID] = useState(0);
  return (
    <infoContext.Provider
      value={{
        projectInfo,
        technologies,
        setProjectID,
        projectID,
      }}
    >
      {props.children}
    </infoContext.Provider>
  );
};

export const InfoConsumer = infoContext.Consumer;
