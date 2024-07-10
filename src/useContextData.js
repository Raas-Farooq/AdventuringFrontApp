import React,{useState,useContext,useEffect} from 'react';

const AppContext = React.createContext();


export const ContextProvider = ({children}) => {
    
    const [message, setMessage] = useState('Challenge Satan, Believe in the ONLY Almighty')
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const openSubmenu = () => {
        setIsSubmenuOpen(true)
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return <AppContext.Provider 
    value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        openSubmenu,
        closeSidebar,
        closeSubmenu,
        message,
    }}
    > {children} </AppContext.Provider>
}


export const useGlobarContext = () => {
    return useContext(AppContext);
}