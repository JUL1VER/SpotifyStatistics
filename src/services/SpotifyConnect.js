import {Client, TrackHandler, PlaylistHandler} from 'spotify-sdk';
import {useEffect} from 'react';

const SpotifyConnect = () => {
    let client = Client.instance;

  client.settings = {
      clientId: 'b8105afd9f364dd2a21eca5f4454d74f',
      secretId: '64ec8bb13c6e4b218ee266eb124834bf',
      scopes: ['user-follow-modify user-follow-read user-library-read user-top-read'],
      redirect_uri: 'http://localhost:3000/'
  };

  let track = new TrackHandler();

  // useEffect(() => {
  //   client.login().then((url) => {
  //       window.location.href = url;
  //   });
  // })

  const log = () => {
    client.login().then((url) => {
      window.location.href = url;
      let accessToken = new URL(url);
      console.log(accessToken.hash);
    });
  }
  
  // useEffect(() => {
  //   let hueta = new URL(document.location.href);
  //   let token = hueta.hash.slice(hueta.hash.indexOf('=') + 1, hueta.hash.indexOf('&'));
  //   client.token = token;
  //   track.search('Archangel', {limit: 5}).then((trackCollection) => {
  //     console.log(trackCollection);
  //   });
  // })
}

export default SpotifyConnect;