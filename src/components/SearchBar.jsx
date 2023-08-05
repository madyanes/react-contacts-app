// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { LocaleConsumer } from '../contexts/LocaleContexts'

const SearchBar = ({ keyword, keywordChange }) => {
    return (
        <LocaleConsumer>
            {
                ({ locale }) => {
                    return (
                        <input
                            type="text"
                            className='search-bar'
                            placeholder={locale === 'id' ? 'Cari berdasarkan nama' : 'Search by name'}
                            value={keyword}
                            onChange={(event) => { keywordChange(event.target.value) }}
                        />
                    )
                }
            }
        </LocaleConsumer>
    )
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired,
}

export default SearchBar
