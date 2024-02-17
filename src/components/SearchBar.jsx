import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Paper , IconButton} from '@mui/material'; //simple div having white bg and some elevation appears like its floating on top of that paper
import {Search} from '@mui/icons-material';

const SearchBar = () => {
  const [searchTerm , setSearchTerm ] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();            //by deafult the form submits and reloads the page
    
    if(searchTerm) {
      navigate(`search/${searchTerm}`);

      setSearchTerm('');
    }
  }

  return (
    <Paper
       component="form"
       onSubmit={handleSubmit}  //callback function
       sx={{    //with sx we can provide any styles to our materail UI
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,    //padding left --> we can shorten and write as abbreviation of paddingLeft in sx prop
        boxShadow: 'none',
        mr: {sm : 5}  //margin right will be different for small screens
       }}
       >
     <input className='search-bar'
            placeholder='Search your video...'
            value={searchTerm}
            onChange={(e) => {setSearchTerm(e.target.value)}}/>
      <IconButton type="submit" sx={{p:'10px',color:'red'}}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
