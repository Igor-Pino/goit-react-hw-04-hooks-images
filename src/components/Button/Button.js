import propTypes from 'prop-types';
import s from './Button.module.css';
import { ReactComponent as IconDown } from '../images/ArrowDown.svg';

const Button = ({ loadMore }) => {
  return (
    <button type="button" onClick={loadMore} className={s.Button}>
      <IconDown className={s.Svg} />
    </button>
  );
};

Button.propTypes = {
  loadMore: propTypes.func.isRequired,
};

export default Button;
