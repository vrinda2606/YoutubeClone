import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Paper , IconButton} from '@mui/material'; //simple div having white bg and some elevation appears like its floating on top of that paper
import {Search} from '@mui/icons-material';

const SearchBar = () => {
  return (
    <Paper
       component="form"
       onSubmit={() => {}}  //leave as an empty callback function
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
            value=""
            onChange={() => {}}/>
      <IconButton type="submit" sx={{p:'10px',color:'red'}}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
