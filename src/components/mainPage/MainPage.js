import { Component } from "react";
import './mainPage.css'

class MainPage extends Component {

    render() {
        return(
            <>
                <div className="wrapperMenu">
                    <div className="menu topTracks"><p className="animatedWord">Top tracks</p></div>
                    <div className="menu topArtists"><p className="animatedWord">Top artists</p></div>
                    <div className="menu topGenres"><p className="animatedWord">Top genres</p></div>
                </div>
            </> 
        )
    }
}

export default MainPage;