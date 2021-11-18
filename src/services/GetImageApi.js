import axios from 'axios';

const key = '23521074-c1847750f84d7ba2d97c15f75';

const searchApi = ({ searchQuery = '', page = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data.hits);
};

export default searchApi;
