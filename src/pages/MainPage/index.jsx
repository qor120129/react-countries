import React from 'react'
import { useState, useEffect } from 'react'
import Header from 'components/Header'
import List from 'components/List'
import Footer from 'components/Footer'
import Search from 'components/Search'
import Loading from 'components/Loading'

const MainPage = () => {
  const [countries, setCountries] = useState([])
  const [displayedCountries, setDisplayedCountries] = useState([])
  const [errorMsg, seterrorMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const url = `https://restcountries.com/v3.1/all?fields=name,capital,area,continents,languages,flags,population,translations,currencies`

  useEffect(() => {
    setLoading(true)
    fetchCountries()
  }, [])

  const fetchCountries = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      formatCountry(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setCountries([])
      seterrorMsg(error.message)
      console.error('error.message', error.message)
    }
  }
  const formatCountry = (data = []) => {
    const Country = data.map(item => {
      return {
        name: item.name ? item.name.official : '',
        capital: item?.capital ? item.capital[0] : '정보없음',
        area: item.area ? item.area : '0',
        continents: item.continents ? item.continents[0] : '',
        languages: formatLanguages(item.languages ? item?.languages : ''),
        imgUrl: item.flags ? item.flags.png : '',
        population: item.population ? item?.population : '0',
        koName: item.translations ? item?.translations?.kor?.official : '',
        currencies: formatCurrencies(item.currencies ? item?.currencies : ''),
      }
    })
    setCountries(Country)
    filterCountries(Country)
  }
  // 20개씩 보여주기
  const filterCountries = async (countries, displayedCountries = []) => {
    const limit = displayedCountries.length + 25
    const showCountries = countries.filter((_, index) => index + 1 <= limit)
    setDisplayedCountries(showCountries)
  }

  const formatLanguages = (languages) => {
    return Object.values(languages)
  }

  const formatCurrencies = (currencies) => {
    const filterCurrencies = Object.values(currencies)
    return filterCurrencies[0]?.symbol
  }

  const searchError = (error) => {
    seterrorMsg(error)
  }


  return (
    <>
      <Header />
      {loading && (
        <Loading className={'w-20'} />
      )}
      <div className="px-4 max-w-5xl m-auto">
        <Search fetchCountries={fetchCountries} formatCountry={formatCountry} searchError={searchError} />
        <List
          countries={countries} displayedCountries={displayedCountries} errorMsg={errorMsg} filterCountries={filterCountries}
        />
      </div>
      <Footer />
    </>
  )

}





export default MainPage