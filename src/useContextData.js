import React,{useState,useContext,useEffect} from 'react';
import dataLinks from './submenuData.js';

const AppContext = React.createContext();


export const ContextProvider = ({children}) => {
    const [location, setLocation] = useState({});
    const [message, setMessage] = useState('Challenge Satan, Believe in the ONLY Almighty')
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [linksCategory, setLinksCategroy] = useState({page: '', links:[]})
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const openSubmenu = (category, coordination) => {
        console.log("dataLinkds: ", dataLinks);
        const linkFound = dataLinks.find(link => link.page === category);
        
        setLinksCategroy(linkFound)
        setLocation(coordination);
        console.log("linksCategory : ", linksCategory);
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
        location,
        linksCategory
    }}
    > {children} </AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext);
}