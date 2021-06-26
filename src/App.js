import React, { useEffect } from "react";
import "./App.css";
import Player from "./Player";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {



  const [{user,token},dispatch] = useStateValue();


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;



    if (_token) {
      dispatch({
        type:"SET_TOKEN",
        token:_token,
      });
     
      
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        //console.log(user);

        dispatch({
          type:"SET_USER",
          user:user,
        });
      });

     spotify.getUserPlaylists().then((playlists)=>{
     dispatch({
       type:"SET_PLAYLISTS",
       playlists:playlists,
     });
    });

  
  
  }
  }, []);




  return (
    <div className="App">
      {token ? <Player  spotify={spotify}/>
        :
        <Login />}

    </div>
  );
}

export default App;
