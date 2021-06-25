import React from 'react'
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

function Sidebar() {
    return (
        <div className="sidebar">
       <img className="sidebar__logo" src="data:image/png;base64,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" alt=""/>
    
        <SidebarOption title="Home"/>
        <SidebarOption title="Search"/>
        <SidebarOption title="Library"/>

        </div>
    );
}

export default Sidebar;
