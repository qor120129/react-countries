import React from 'react'
import { useState, useEffect } from 'react'
import Header from 'components/Header.JSX'
import List from 'components/List'
import Footer from 'components/Footer'
import Search from '../../components/Search'

const MainPage = () => {
  const [countries, setCountries] = useState([])
  const [displayedCountries, setDisplayedCountries] = useState([])
  const [errorMsg, seterrorMsg] = useState('')
  const url = `https://restcountries.com/v3.1/all?fields=name,capital,area,continents,languages,flags,population,translations,currencies`

  useEffect(() => {
    fetchCountries()
  }, [errorMsg])

  const fetchCountries = async () => {
    try {
      const response = await fetch(url)
      console.log(response)
      if (response.status === 200) {
        const data = await response.json()
        // console.log(data)
        setCountries(data)
        filterCountries(data)
      } else {
        seterrorMsg(data.message)
      }
    } catch (error) {
      seterrorMsg(error.message)
      console.error('error.message', error.message)
    }
  }

  // 20개씩 보여주기
  const filterCountries = async (countries, displayedCountries = []) => {
    const limit = displayedCountries.length + 25
    const showCountries = countries.filter((_, index) => index + 1 <= limit)
    setDisplayedCountries(showCountries)
  }

  const formatLanguages = (languages) => {
    console.log('languages', languages)

  }

  return (
    <>
      <Header />
      <div className="px-4 max-w-5xl m-auto">
        <Search />
        <List
          countries={countries} displayedCountries={displayedCountries} errorMsg={errorMsg} filterCountries={filterCountries}
        />
      </div>
      <Footer />
      {/* <div className='flex flex-col h-full'>
      </div> */}
    </>
  )

}





export default MainPage