import { Stack } from "@mui/material"; // used to create layout with a horizontal/vertcal stack of elements
import {Link} from "react-router-dom"; // creates links for navigation within React appn
import {logo} from '../utils/constants';
import SearchBar from  './SearchBar';

const Navbar = () => (
  <Stack direction="row" 
         alignItems="center" 
         p={2} 
         sx={{position: 'sticky' , background: '#000' , top : 0 , justifyContent: 'space-between'}}>
  <Link to="/" style={{display: 'flex' , alignItems: 'center'}}>
    <img src={logo} alt="logo" height={45}/>
  </Link>
  <SearchBar />
  </Stack>
)

export default Navbar
