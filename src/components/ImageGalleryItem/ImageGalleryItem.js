import propTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imageUrl, openLarge }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img src={imageUrl} alt="" className={s.ImageGalleryItem_image} onClick={openLarge} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  openLarge: propTypes.func.isRequired,
  imageUrl: propTypes.string.isRequired,
};

export default ImageGalleryItem;
