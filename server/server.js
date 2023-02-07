require('dotenv').config()
const express = require("express")
const SpotifyWebApi = require("spotify-web-api-node")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express();
app.use(cors())
app.use(bodyParser.json())

// create a rout to refresh our token
app.post("/refresh", (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        // hard code our necessary data
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken,
    })

    spotifyApi.refreshAccessToken()
    .then(data => {
            //console.log('The access token has been refreshed!');
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in,
            })
        }).catch(err => {
            console.log(err)
            res.sendStatus(400)
    }) //console.log('Could not refresh access token', err);
})

app.post("/login", (req,res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        // hard code our necessary data
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            // get our access and refresh tokens
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    })
    .catch(err => {
        // send errors if they are thrown
        //console.log(err)
        res.sendStatus(400)
    })
})

app.listen(3001)