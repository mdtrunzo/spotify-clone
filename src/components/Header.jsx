import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material'
import { useContext } from 'react';
import { DataLayerContext } from '.././context/DataLayer';

function Header() {
    const [{user}, dispatch] = useContext(DataLayerContext)

  return (
    <div className='header'>
        <div className="header-left">
            <SearchIcon />
            <input type="text" placeholder='Search for artists, songs or albums..' />
        </div>
        <div className="header-right">
            <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header