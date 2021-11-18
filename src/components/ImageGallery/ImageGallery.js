import propTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, getLargeImage }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            imageUrl={webformatURL}
            key={id}
            openLarge={() => getLargeImage(largeImageURL)}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  getLargeImage: propTypes.func.isRequired,
  images: propTypes.array.isRequired,
};

export default ImageGallery;
