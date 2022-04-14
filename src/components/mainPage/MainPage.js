import {Link} from 'react-router-dom';
import './mainPage.css'

const MainPage = () => {

    return(
        <>
            <div className="wrapperMenu">
                <div className="menu topTracks"><p className="animatedWord"><Link className="link" to="/top_tracks">Top tracks</Link></p></div>
                <div className="menu topArtists"><p className="animatedWord"><Link className="link" to="/top_atrists">Top artists</Link></p></div>
                <div className="menu topGenres"><p className="animatedWord"><Link className="link" to="/top_genres">Top genres</Link></p></div>
            </div>
        </> 
    )
}

export default MainPage;