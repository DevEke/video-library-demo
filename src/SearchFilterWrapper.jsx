
import { useState } from "react";
import { FiSearch, FiX } from 'react-icons/fi';


function SearchFilter(props) {
    const [value, setValue] = useState('')
  
    const { setfilter, filters, setQuery } = props;

    const clearSearch = () => {
        setValue('');
        setQuery('');
    }
    const handleChange = (e) => {
        setValue(e.target.value);
        setQuery(e.target.value);
    }

    return (
        <div className="search-filter__wpr">

        {/* Search Bar */}
            <div className="search__wpr">

                <input onChange={handleChange}
                    className="search__input"
                    placeholder="Search Videos & Courses"
                    value={value}/>

                    <FiSearch className="search__icon" />

                <button onClick={clearSearch} className="clear__btn">
                    <FiX className="clear__icon" />
                </button>

            </div>
            

        {/* Filter Bar */}
            <div className="filter__wpr">
                <div/>
                <button style={filters.includes('front-end') ? {fontWeight: '700'} : {fontWeight:'normal'}}
                        onClick={() => setfilter('front-end')}>Front-End</button>
                <button style={filters.includes('back-end') ? {fontWeight: '700'} : {fontWeight:'normal'}} 
                        onClick={() => setfilter('back-end')}>Back-End</button>
                <button style={filters.includes('data-sci') ? {fontWeight: '700'} : {fontWeight:'normal'}}
                        onClick={() => setfilter('data-sci')}>Data Science</button>
                <button style={filters.includes('mobile') ? {fontWeight: '700'} : {fontWeight:'normal'}}
                        onClick={() => setfilter('mobile')}>Mobile</button>
                <button style={filters.includes('per-dev') ? {fontWeight: '700'} : {fontWeight:'normal'}}
                        onClick={() => setfilter('per-dev')}>Personal Development</button>
                <button className="clear-filters" onClick={() => setfilter('')}>Clear</button>
            </div>
        </div>
    )
}

export default SearchFilter;