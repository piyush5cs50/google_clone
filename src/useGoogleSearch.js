// import React from 'react'
import React, { useEffect,useState } from 'react'
import Api_key from './Key'

const CONTEXT_KEY = "bf02bd1f1f92252e5"

const useGoogleSearch = (term) => {
    const [data,setData] = useState(null)
  
    useEffect(() => {
        const fetchData = async() => {
fetch(`https://www.googleapis.com/customsearch/v1?key=${Api_key}&cx=${CONTEXT_KEY}&q=${term}`)
    
    .then(response => response.json())
    .then(result => {setData(result)})
        }
        fetchData() 
    }, [term] )
    return {data}
  
}

export default useGoogleSearch