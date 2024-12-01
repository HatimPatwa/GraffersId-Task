/*eslint no-unused-vars: "warn"*/

import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import CompanyList from './Components/CompanyList'
import CompanyFilterComponent from './Components/CitySelector'

const App = () => {

  const [searchString, setSearchString] = useState('')

  const handleSearch = (str) => {
    setSearchString(str)
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className='w-[70%] mx-auto'>
        <CompanyFilterComponent  handleSearch={handleSearch} />
        <CompanyList searchString={searchString}/>
      </div>
    </div>
  );
};

export default App;