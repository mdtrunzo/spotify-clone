import { useEffect, useContext} from 'react'
import { getTokenFromUrl } from "./spotify";
import { DataLayerContext } from './context/DataLayer';
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./components/Login";
import Player from './components/Player';

const spotify = new SpotifyWebApi()

function App() {
  const [{user, token}, dispatch] = useContext(DataLayerContext)

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''
    const _token = hash.access_token
    if(_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      })

      spotify.getPlaylist('37i9dQZEVXcKayTZ4ygHEr').then(res => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: res
        })
      })
    }
  },[dispatch])

  return (
    <div className="App">
      {token ?  <Player spotify={spotify} />  : <Login/>}
    </div>
  );
}

export default App;
