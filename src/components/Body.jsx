import { useContext } from "react"
import Header from "./Header"
import { DataLayerContext } from '.././context/DataLayer'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{discover_weekly}, dispatch] = useContext(DataLayerContext)
  console.log(discover_weekly)
  return (
    <div className="body">
      <Header spotify={spotify}/>

      <div className="body-info">
        <img src={discover_weekly?.images[0].url} alt={discover_weekly?.name}/>
        <div className="body-info-text">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleFilledIcon className="body-shuffle footer-green"/>
          <FavoriteIcon fontSize="large" className="footer-green"/>
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map(item => {
         return <SongRow track={item.track} />
        })}
      </div>
    </div>
  )
}

export default Body