import React from 'react'

import {container} from react-bootstrap;

const AUTH_URL = 
// client id = public so we can put on our front end
// scopes give us access to certain permissions from the user
"https://accounts.spotfiy.com/authorize?client_id=d4fb8ac6b7174feda68bce832fd7777f&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
    return(
        <div>

        </div>
    )
}