import React from 'react';
import "./Sidebar.css";
import "./SidebarOption.css";

function SidebarOption({title, Icon}) {
    return (
        <div className="sidebarOption">
            <p>{title}</p>
            
        </div>
    )
}

export default SidebarOption;
