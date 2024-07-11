import React,{useEffect,useState} from "react";
import { useGlobalContext } from "./useContextData";
import './App.css';
import { FaTimes } from "react-icons/fa";
import WindowSize from "./windowSize";
import dataLinks from './submenuData.js';

function Sidebar(){
    const size = WindowSize();
    const {isSidebarOpen, closeSidebar} = useGlobalContext();
    console.log("size ", size.newWidth)
    useEffect (() => {
        if(size.newWidth > 630){
            console.log("size.newWidth ", size.newWidth)
            closeSidebar();
            console.log("sideBar UseEffect: ", isSidebarOpen)
        }
    }, [size.newWidth])
  
    return (
        
        <aside className={`${isSidebarOpen ? 'show-links' : 'hideLinks'}`}>
            
            <button className="closeBtn" onClick={closeSidebar}><FaTimes /></button>
            <div className="sidebar-links">
                    {dataLinks.map((data, ind) => {
                        const {page , links} = data;
                        return(
                            <div className="data" key={ind}>
                                <h3> {page} </h3>
                                <div className="singleLinks" key={ind}>
                                    {links.map((link, ind) => {
                                        const {label, icon, url} = link;
                                        return (
                                            <a key={ind} className="anchor" href={url}> 
                                            {icon}
                                            {label} 
                                            </a>
                                        )
                                        
                                    })}
                                </div>
                            </div>
                        )
                        
                        
                        
                    })} 
            </div>
        </aside>
            
     
    )
}

export default Sidebar