import {Client, TrackHandler} from 'spotify-sdk';

import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import { contentFetching } from '../../store/actions';
import { useDispatch } from 'react-redux';

import './mainPage.css';

const MainPage = () => {

    let client = Client.instance;

    client.settings = {
        clientId: 'b8105afd9f364dd2a21eca5f4454d74f',
        secretId: '64ec8bb13c6e4b218ee266eb124834bf',
        scopes: ['user-follow-modify user-follow-read user-library-read user-top-read'],
        redirect_uri: 'https://jul1ver.github.io/SpotifyStatistics.React-Redux/main'
    };

    const dispatch = useDispatch();

    let track = new TrackHandler();

    useEffect(() => {
        let hueta = new URL(document.location.href);
        let token = hueta.hash.slice(hueta.hash.indexOf('=') + 1, hueta.hash.indexOf('&'));
        client.token = token;

        track.search('Archangel', {limit: 5})
            .then((trackCollection) => {
                console.log(trackCollection);
                const content = trackCollection.map((value) => {
                    return {
                        artist: value._album.artists[0].name,
                        name: value._album.name
                    }
                })
                dispatch(contentFetching(content));
            });
    })

    return(
        <>
            <div className="wrapperMenu">
                <div className="menu topTracks"><p className="animatedWord"><Link className="link" to="/tracks">Top tracks</Link></p></div>
                <div className="menu topArtists"><p className="animatedWord"><Link className="link" to="/atrists">Top artists</Link></p></div>
                <div className="menu topGenres"><p className="animatedWord"><Link className="link" to="/genres">Top genres</Link></p></div>
            </div>
        </> 
    )
}

export default MainPage;