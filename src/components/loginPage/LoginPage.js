import {Client, TrackHandler, PlaylistHandler} from 'spotify-sdk';
import {useEffect} from 'react';
import { contentFetching } from '../../store/actions';
import { useDispatch } from 'react-redux';

import './loginPage.css';

const LoginPage = () => {

    const dispatch = useDispatch();
    let client = Client.instance;

    client.settings = {
        clientId: 'b8105afd9f364dd2a21eca5f4454d74f',
        secretId: '64ec8bb13c6e4b218ee266eb124834bf',
        scopes: ['user-follow-modify user-follow-read user-library-read user-top-read'],
        redirect_uri: 'http://localhost:3000/main'
    };

    let track = new TrackHandler();

    // useEffect(() => {
    //     client.login().then((url) => {
    //         window.location.href = url;
    //     });
    // })

    const log = () => {
        client.login().then((url) => {
        window.location.href = url;
        let accessToken = new URL(url);
        console.log(accessToken.hash);
        });
    }
  
    useEffect(() => {
        let hueta = new URL(document.location.href);
        let token = hueta.hash.slice(hueta.hash.indexOf('=') + 1, hueta.hash.indexOf('&'));
        client.token = token;
        track.search('Archangel', {limit: 5})
            .then((trackCollection) => {
                dispatch(contentFetching(trackCollection));
            });
    })

    return (
        <>
            <div className="loginWrapper">
                <div className="button" onClick={log}>
                    <div className="button__text">Get <span className="spotyWord">Spotify</span> data</div>
                    <div className="button__wrapper">
                        <div className="button__arrow"></div>
                        <div className="button__border-circle"></div>
                        <div className="button__mask-circle">
                        <div className="button__small-circle"></div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default LoginPage;