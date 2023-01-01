import { useState, useEffect } from "react"
import axios from "axios"

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
        axios.post('http://localhost:3001/login', {
            code,
        }).then(res => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            // removes the code from the end of our url
            window.history.pushState({}, null, '/')
        }).catch(() => {
            // send back to local host if error is thrown
            window.location = "/"
        })
        // run use effect every time our code changes
    }, [code])

    useEffect(() => {
        if(!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
        axios
        .post('http://localhost:3001/refresh', {
            refreshToken,
        }).then(res => {
            // some thing as above but only for expires in and access token
            setAccessToken(res.data.accessToken)
            setExpiresIn(res.data.expiresIn)
        }).catch(() => {
            // send back to local host if error is thrown
            window.location = "/"
        })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
        // whenever our refresh token or expires in changes
        // run use effect
    }, [refreshToken, expiresIn])

    return accessToken
}