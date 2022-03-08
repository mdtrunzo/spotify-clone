import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from '@mui/material'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src="https://los40es00.epimg.net/los40/imagenes/2018/09/26/los40classic/1537954405_106365_1569490515_noticia_normal.jpg" alt="" className='footer-album-logo'/>
        <div className="footer-song-info">
          <h4>Here Comes The Sun</h4>
          <p>The Beatles</p>
        </div>
      </div>

      <div className="footer-center">
        <ShuffleIcon className='footer-green' />
        <SkipPreviousIcon className='footer-icon' />
        <PlayCircleOutlineIcon fontSize='large' className="footer-icon" />
        <SkipNextIcon className="footer-icon" />
        <RepeatIcon className="footer-green" />
      </div>

      <div className="footer-right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer