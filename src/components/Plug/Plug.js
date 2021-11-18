import s from './Plug.module.css';
import BackPlug from '../images/plug.jpg';

const Plug = () => {
  return <div className={s.Plug} style={{ backgroundImage: `url(${BackPlug})` }}></div>;
};

export default Plug;
