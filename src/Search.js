import React,{useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import "./Search.css"
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import {actionTypes} from './reducer'
import { useStateValue } from './StateProvider';
import "./SearchPage.css"


const Search = ({hideButton}) => {
console.log(hideButton)
const [input, setInput] = useState("")
const[{}, dispatch] = useStateValue();
const navigate = useNavigate()

const search = (e) => {
e.preventDefault();  

dispatch({
  type: actionTypes.SET_SEARCH_TERM,
  term: input
})

navigate('/search')
}

  return (
  <form className='search'>
    <div className='search-container'>
      <div className='search__input'>
        <SearchIcon className='search-icon'/>
        <input value={input} onChange={(e) => setInput(e.target.value)}/>
        <MicIcon/>
      </div>

    <div className='search-button'>
      <Button className={hideButton ? 'hide-button' : ' '} type='submit' variant="outlined" onClick={search}>Search</Button>
      <Button className={hideButton ? 'hide-button' : ' '} variant='outlined'>I'm feeling lucky</Button>
     </div>
    </div>
</form>
  )
}

export default Search