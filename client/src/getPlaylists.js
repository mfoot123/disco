//credits: https://www.youtube.com/watch?v=dGFUQf5pcpk

import React, { useEffect, useState } from "react";
import axios from "axios";

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";

const SpotifyGetPlaylists = (accessToken) => {
  const [data, setData] = useState({});

  const handleGetPlaylists = () => {
    axios
      .get(PLAYLISTS_ENDPOINT, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button onClick={handleGetPlaylists}>Get Playlists</button>
      {data.items ? data.items.map((item) => <p>{item.name}</p>) : null}
    </>
  );
};

export default SpotifyGetPlaylists;