import { FormattedMessage } from 'react-intl';
import menu from '../img/menu2.png';
import './Menu.scss';

export const Menu = () => {
  return (
    <section className='Menu'>
      {/* <h1>
        <FormattedMessage id='main.menu' />
      </h1> */}
      <div className='Info-imageContainer'>
          <img src={menu} alt='Menu' />
        </div>
      {/* <p className='subText'>
        <FormattedMessage id='main.program.beingUpdated' />
      </p> */}
    </section>
  );
};
