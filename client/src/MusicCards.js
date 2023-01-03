// code from: https://github.com/3DJakob/react-tinder-card-demo

import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./MusicCard.css";
//const SpotifyWebApi = require("spotify-web-api-node")

function MusicCards() {
    const [people, setPeople] = useState([
        {
        name: 'Brakence',
          url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.genius.com%2Fdc06fee1cb8c0fcffc28671b91cbb56c.1000x1000x1.jpg&f=1&nofb=1&ipt=cdd25aa84e1cab4078cfa78e5273e898cdeba2f3bdcaf4a9999bf167b9bbe2d2&ipo=images'
        },
        {
          name: 'Loveless',
          url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.genius.com%2F4456aea6c7167ab1204456b5699fba34.720x720x1.jpg&f=1&nofb=1&ipt=f1faf35da0bb684b01969d819859c5d3b443005fdff936a9138d61ffe01a1828&ipo=images'
        },
        {
          name: 'Tory Lanez',
          url: 'https://novo.press/wp-content/uploads/2020/03/Tory-Lanez-Red.jpg'
        },
        {
          name: 'Blink 182',
          url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.prints4u.net%2Fwp-content%2Fuploads%2F2019%2F11%2FBlink_182_004.jpg&f=1&nofb=1&ipt=21ef59e2e1b584c6cb4bccdf6aff144a890129d352768ab2aa6fac6ccbe56561&ipo=images'
        }
    ]);
    
    return (
        <div>
          <div className="tinderCards__cardContainer">
            {people.map((person) => (
              <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
              >
                <div class="wrapper">
                  <div
                    className="card"
                    style={{ backgroundImage: `url(${person.url})` }}
                  >
                    <div class="descriptions">
                      <h3>{person.name}</h3>
                      <p>{person.text}</p>
                    </div>
                  </div>
                </div>
              </TinderCard>
            ))}
          </div>
        </div>
      );
}

export default MusicCards