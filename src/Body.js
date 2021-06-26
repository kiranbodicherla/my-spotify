import React from 'react';
import "./Body.css";
import Header from './Header';

function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify} />
         
            <div className="body__info">
        <img src="https://img.freepik.com/free-vector/blue-copy-space-digital-background_23-2148821698.jpg?size=626&ext=jpg" alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover</h2>
          <p>description.....</p>
        </div>
      </div>
   </div>
    );
}

export default Body;
