import { useState, useEffect  } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import s from './App.module.css';
import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import fetchApi from './services/GetImageApi';
import Modal from './components/Modal';

import Plug from './components/Plug';

function App (query) {
 
  const[searchQuery, setSearchQuery] = useState('');
  const[images, setImages] = useState([]);
  const[largeImage, setLargeImage] = useState('');
  const[page, setPage] = useState(1);
  const[isLoading, setIsLoading] = useState(false);
  const[showModal, setShowModal] = useState(false);
  const[error, setError] = useState('');
  const[amount, setAmount] = useState('');
 


  useEffect(()=> {
        if (!searchQuery) {
        return;
        }

    const fetchImages = () => {   
      setIsLoading(true);
      fetchApi({ page, searchQuery })
      .then(responseImages => {setImages (prevImages => [...prevImages, ...responseImages]); 
        setAmount(responseImages.length);
        if (page > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }        
      })
      .catch(error => setError(error.message ))
      .finally(() => setIsLoading(false));
     
    };
     fetchImages()
   
   

    
  }, [searchQuery, page])



  const updatePage = () => {
    
    setPage(prevPage => prevPage + 1);
  
  };

  const handlerSearcQuery = (query) => {
    setSearchQuery(query);
    setImages([]);
    setPage(1)
  };

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const getLargeImage = (largeImage = '') => {
    setLargeImage(largeImage);
    toggleModal();
  };



  const shouldRenderLoadMoreButton = amount > 11 && !isLoading;
  const shouldShowPlag = amount === 0 && page !== 2 && !isLoading;


    return (
      <div>
        <SearchBar handlerSearcQuery={handlerSearcQuery} />

        {error && (<h2>Error</h2>)}

        {shouldShowPlag && (<Plug />)}

        <ImageGallery images={images} getLargeImage={getLargeImage} />

        {isLoading && (
          <Loader className={s.Loader} type="ThreeDots" color="#0e0e86" height={80} width={80} />
        )}

        {shouldRenderLoadMoreButton && (<Button loadMore={updatePage} />)}

        {showModal && (
          <Modal showModal={getLargeImage}>
            <img src={largeImage} alt="" />
          </Modal>
        )}
      </div>
    );
  
}

export default App;
