import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import InputWithSuggestions from '../form/inputWithSuggestion/InputWithSuggestions'

 function SearchCity() {
  const [searchText,setSearchText] = useState('')
  const [suggestions,setSuggestions] = useState([])
  const router = useRouter()

  const fetchCitiesList =  async () => {
    const CITIES_LIMIT = 5
    const response = await fetch(`/api/openweathermap?url=geo/1.0/direct?q=${searchText}&limit=${CITIES_LIMIT}`)
    const json = await response.json() 
    handleList(json)  
    console.log(json)
  }
  const handleList = (list) => {
    const formattedList = list.map((obj) => ({
      text: obj.state ? `${obj.name}, ${obj.state} , ${obj.country}`
      : `${obj.name}, ${obj.country}`,
      onClick: () => router.push(`/info/${obj.lat}/${obj.lon}`),
    })
    )
    setSuggestions(formattedList)  
    
  }
  useEffect(() => {
    if (searchText.length >= 3)
    fetchCitiesList()
    else setSuggestions([]) 
  },[searchText])

  
  return(
    <InputWithSuggestions 
      placeholder='Digite o nome de sua cidade'
      value={searchText}
      onChange={(event) => setSearchText(event.target.value) }
      suggestions={suggestions}
     />
  )
}
export default SearchCity