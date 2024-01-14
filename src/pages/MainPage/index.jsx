import React from 'react'
import { useState, useEffect } from 'react'

import List from 'components/List'
import Search from 'components/Search'
import Loading from 'components/Loading'
import SelectMenu from '../../components/SelectMenu'

const MainPage = () => {
  const [countries, setCountries] = useState([])
  const [newCountries, setNewCountries] = useState([])
  const [searchData, setSearchData] = useState([])
  const [displayedCountries, setDisplayedCountries] = useState([])
  const [errorMsg, seterrorMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const [continent, setContinent] = useState([])
  const [search, setSearch] = useState('')
  const [selectContinent, setSelectContinent] = useState('All Continent')

  const url = `https://restcountries.com/v3.1`
  const urlFilter = `?fields=name,capital,area,continents,languages,flags,population,translations,currencies`

  useEffect(() => {
    setLoading(true)
    fetchCountries()
  }, [])

  const fetchCountries = async () => {
    try {
      const response = await fetch(url + `/all`)
      const data = await response.json()
      const filterData = formatCountry(data)
      newFilterContinent(filterData) //select option배열
      filterCountries(filterData)  //현재 보여줄 데이터 
      setCountries(filterData) //변경할 전체 데이터 
      setNewCountries(filterData) //전체 데이터
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setCountries([])
      seterrorMsg(error.message)
      console.error('error.message', error.message)
    }
  }

  //input 변경감지
  const changeValue = (value) => {
    setSearch(value)
    if (value.length === 0) {
      console.log(newCountries)
      continentSearch(selectContinent, newCountries)
    }
  }

  // 이름검색 API
  const fetchSearchCountries = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (search) {
      try {
        const response = await fetch(`${url}/translation/${search}`)
        const data = await response.json()
        const searchCountriesData = formatCountry(data)
        setSearchData(searchCountriesData)
        if (response.status === 200) {
          continentSearch(selectContinent, formatCountry(data))
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
        filterCountries([])
        seterrorMsg('정보가 없습니다.')
        console.error('error.message', error.message)
      }
    } else {
      alert('검색어를 입력하세요')
      setLoading(false)
    }

  }

  //input 변경감지
  const changeSelect = (selectvalue) => {
    setSelectContinent(selectvalue)
    if (!search) {
      continentSearch(selectvalue, newCountries)
    } else {
      continentSearch(selectvalue, searchData)
    }
  }


  // 지역대륙 필터
  const continentSearch = (selectvalue, data) => {
    if (selectvalue === 'All Continent') {
      setCountries(data)
      filterCountries(data)
    } else {
      const filterContinentData = data.filter(item => {
        return item.continents === selectvalue
      })
      setCountries(filterContinentData)
      filterCountries(filterContinentData)
    }
  }

  // 20개씩 보여주기
  const filterCountries = (countries, displayedCountries = []) => {
    const limit = displayedCountries.length + 25
    const showCountries = countries.filter((_, index) => index + 1 <= limit)
    setDisplayedCountries(showCountries)
    // setLoading(false)
  }

  //데이터정리
  const formatCountry = (data) => {
    const Country = data.map(item => {
      return {
        name: item.name ? item.name.official : '정보없음',
        capital: item?.capital ? item.capital[0] : '정보없음',
        area: item.area ? item.area : '0',
        continents: item.continents ? item.continents[0] : '',
        languages: formatLanguages(item.languages ? item?.languages : ''),
        flagImg: item.flags ? item.flags.svg : '',
        flagAlt: item.flags?.alt ? item.flags.alt : `${item?.name?.official} svg`,
        population: item.population ? item?.population : '0',
        koName: item.translations ? item?.translations?.kor?.official : '',
        currencies: formatCurrencies(item.currencies ? item?.currencies : ''),
        maps: item?.maps ? item.maps.googleMaps : '정보없음'
      }
    })
    return Country
  }

  const formatLanguages = (languages) => {
    return Object.values(languages)
  }

  const formatCurrencies = (currencies) => {
    const filterCurrencies = Object.values(currencies)
    return filterCurrencies[0]
  }


  //select option배열 정리
  const newFilterContinent = (data) => {
    const newContinent = data.map(item => item.continents)
    const filterContinent = [...new Set(newContinent)]
    filterContinent.splice(0, 0, 'All Continent')
    setContinent(filterContinent)
  }

  return (
    <>
      {loading && (<Loading className={'w-20'} />)}
      <div className="px-4 max-w-5xl m-auto">
        <Search fetchSearchCountries={fetchSearchCountries} changeValue={changeValue} search={search}>
          <SelectMenu selectContinent={selectContinent} continent={continent} changeSelect={changeSelect} />
        </Search>
        <div className='p-2 mb-6 px-4 border-b'>css필터</div>
        <List countries={countries} newCountries={newCountries} displayedCountries={displayedCountries} errorMsg={errorMsg} filterCountries={filterCountries} />
      </div>
    </>
  )

}





export default MainPage