import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = (props) => {
    
    const [folders, setFolders] = useState([]);

    const dataCentre = {
        // user folders
        folders,
        setFolders
    }
    
    return (<AppContext.Provider value={dataCentre}>
        {props.children}
    </AppContext.Provider>)
}
