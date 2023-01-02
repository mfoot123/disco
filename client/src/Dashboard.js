import React from 'react'
import useAuth from "./useAuth"
import MusicCards from "./MusicCards"

export default function Dashboard({code }) {
    const accessToken = useAuth(code)
    document.body.style.background = '#081018'; 
    return <div 
    className="App" title="Disco"> 
    <MusicCards></MusicCards>
    </div>
}