import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';
import { ReactComponent as Icon } from '../images/icon-check.svg';

class SearchBar extends Component {
  state = {
    query: '',
  };

  reset = () => {
    this.setState({ query: '' });
  };

  handelerChange = e => {
    const { value } = e.currentTarget;

    this.setState({ query: value });
  };

  handlerSubmit = e => {
    e.preventDefault();
    this.props.handlerSearcQuery(this.state);
    this.reset();
  };

  render() {
    const { query } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handlerSubmit}>
          <button type="submit" className={s.SearchForm_button}>
            <Icon width="22" height="22" />
          </button>

          <input
            className={s.SearchForm_input}
            value={query}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handelerChange}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  handlerSearcQuery: PropTypes.func.isRequired,
};

export default SearchBar;
