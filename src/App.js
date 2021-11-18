import { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import s from './App.module.css';
import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import fetchApi from './services/GetImageApi';
import Modal from './components/Modal';

import Plug from './components/Plug';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    largeImage: '',
    page: 1,
    isLoading: false,
    showModal: false,
    error: '',
    amount: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.reset();
      this.fetchImages();
    }
    if (this.state.page !== 2 && prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  reset = () => {
    this.setState({ images: [], page: 1 });
  };

  fetchImages = () => {
    const { page, searchQuery } = this.state;

    this.setState({ isLoading: true });

    fetchApi({ page, searchQuery })
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
          amount: images.length,
        }));
      })
      .catch(error => this.setState({ error: 'Picture not found' }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handlerSearcQuery = ({ query }) => {
    this.setState({ searchQuery: query });
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  getLargeImage = (largeImage = '') => {
    this.setState({ largeImage });

    this.toggleModal();
  };

  render() {
    const { images, showModal, largeImage, isLoading, amount, page } = this.state;

    return (
      <div>
        <SearchBar handlerSearcQuery={this.handlerSearcQuery} />

        {images.length === 0 && !isLoading && page !== 1 && <Plug />}

        <ImageGallery images={images} getLargeImage={this.getLargeImage} />

        {isLoading && (
          <Loader className={s.Loader} type="ThreeDots" color="#0e0e86" height={80} width={80} />
        )}

        {amount >= 11 && !isLoading && <Button loadMore={this.fetchImages} />}

        {showModal && (
          <Modal showModal={this.getLargeImage}>
            <img src={largeImage} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
