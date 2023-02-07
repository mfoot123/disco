import React, { useState, useEffect } from "react";
import useAuth from "./useAuth"
import MusicCards from "./MusicCards"
import SpotifyGetPlaylists from "./getPlaylists"
/*import Player from "./Playback"*/


export default function Dashboard({code }) {
    const accessToken = useAuth(code)
/*
    const [playingTrack, setPlayingTrack] = useState()

function chooseTrack(track) {
    setPlayingTrack(track)
}
 */

    //document.body.style.background = '#081018'; 
    return <div 
    className="App" title="Disco"> 
    {/*<Player accessToken={accessToken} trackUri={playingTrack?.uri} />*/}
    <MusicCards accessToken={accessToken} >

    </MusicCards>
    <SpotifyGetPlaylists accessToken={accessToken}></SpotifyGetPlaylists>
    </div>
}