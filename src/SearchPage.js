import React from 'react'
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch';
import Response from './Response'
import {Link} from 'react-router-dom'
import Search from './Search'
import './SearchPage.css'
// import {SearchIcon, DescriptionIcon,ImageIcon, LocalOfferIcon, RoomIcon, MoreVertIcon } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const SearchPage = () => {
 const [{term},dispatch] = useStateValue();
 const {data} = useGoogleSearch(term)
// const data = Response
 console.log(data)

 
  return (
    <div className='search-page'>
        <dive className='searchPage_head'>
            <Link  to='/'>
            <img className='searchPage-logo-image' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'/>
             </Link>

             <div className='searchPage__headerbody'>
             <Search hideButton={true} />


             <div className='searchPage__options'>
                <div className='searchPage__optionsLeft'>
                     <div className='SearchPage__option'>
                       <SearchIcon />
                       <Link to='/all'>All</Link>
                    </div>
                    <div className='SearchPage__option'>
                       <DescriptionIcon />
                       <Link to='/news'>News</Link>
                    </div>
                    <div className='SearchPage__option'>
                       <ImageIcon />
                       <Link to='/images'>Images</Link>
                    </div>
                   <div className='SearchPage__option'>
                       <LocalOfferIcon />
                       
                       <Link to="/shopping">shopping</Link>
                    </div>
                    <div className='SearchPage__option'>
                       <RoomIcon />
                       <Link to="/maps">maps</Link>
                    </div>
                    <div className='SearchPage__option'>
                       <MoreVertIcon />
                       <Link to='/more'>more</Link>
                    </div> 
                </div>

                <div className='SearchPage__optionsRight'>
                <div className='SearchPage__option'>
                       
                       <Link to='/settings'>Settings</Link>
                    </div>
                    <div className='SearchPage__option'>
                       
                       <Link to='/tools'>Tools</Link>
                    </div> 
                </div>
             </div>
             </div>
            
        
        </dive>
        
        {term && <div className='searchPage__results'>
            <p className='searchPage__resultCount'>
               About {data?.searchInformation.formattedTotalResults} Results ({data?.searchInformation.formattedSearchTime } Seconds) for {term}
            </p>
            {data?.items.map(item => (
                <div className='searchPage__result'>
                   <a href={item.link}>
                   {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                    <img className='searchPage__resultImage'
                    src={
                        item.pagemap?.cse_image[0]?.src}
                        />
                    
                   )}

                    {item.displayLink}
                    </a> 
                    
                    <a className='searchPage__resultTitle'
                     href='item.link'>
                        <h2>{item.title}</h2>
                    </a>
                    <p className='searchPage__resultSnippt'>
                       { item.snippet}
                    </p>
                </div>
            ))}
            
        </div>}


        <div className='search-page_body'>
   
        </div>
    </div>
  )
}

export default SearchPage