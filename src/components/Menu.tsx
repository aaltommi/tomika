import menu from '../img/menu2.png';
import './Menu.scss';

export const Menu = () => {
  return (
    <section className='Menu'>
      <div className='Info-imageContainer'>
          <img src={menu} alt='Menu' />
        </div>
    </section>
  );
};
