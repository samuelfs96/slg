import { createContext, useState } from 'react'

const DataContext = createContext();
const DataProvider = ({children}) => {
    const [Name, setName] = useState(false);
    const [loading, setLoading] = useState(false);
    const value = {
        Name,
        setName,
        loading,
        setLoading
    };
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
};

export { DataContext, DataProvider }