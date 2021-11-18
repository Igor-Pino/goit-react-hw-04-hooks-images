import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';
import { ReactComponent as Icon } from '../images/icon-check.svg';

export default function SearchBar ({handlerSearcQuery}) {
    const [query, setQuery] = useState(''); 

    const handelerChange = e => {
        const { value } = e.currentTarget;
        setQuery(value);
    };

    const handlerSubmit = e => {
        e.preventDefault();
        handlerSearcQuery(query);
        setQuery('');
    };

    return (
        <header className={s.Searchbar}>
          <form className={s.SearchForm} onSubmit={handlerSubmit}>
            <button type="submit" className={s.SearchForm_button}>
              <Icon width="22" height="22" />
            </button>
  
            <input
              className={s.SearchForm_input}
              value={query}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={handelerChange}
            />
          </form>
        </header>
      );

};

SearchBar.propTypes = {
    handlerSearcQuery: PropTypes.func.isRequired,
};
  
