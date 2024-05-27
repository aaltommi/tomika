import { FormattedMessage } from 'react-intl';
import './Info.scss';
import kauppa from '../img/kauppa.jpg';
import kastiel from '../img/kastiel.jpg';

export const Info = () => {
  return (
    <section className='Info'>
      <div className='Info-container'>
        <h1>
          <FormattedMessage id='main.info' />
        </h1>
        <h2 id='location'>
          <FormattedMessage id='main.info.location' />
        </h2>
        <p>
          <FormattedMessage id='main.info.location.desc' />
        </p>
        <div className='Info-imageContainer'>
          <img src={kastiel} alt='Kastiel Krasnany' />
        </div>
        <h2 id='arriving'>
          <FormattedMessage id='main.info.arriving' />
        </h2>
        <p>
          <FormattedMessage id='main.info.arriving.desc' />
        </p>
        <h2 id='dresscode'>
          <FormattedMessage id='main.info.dresscode' />
        </h2>
        <p>
          <FormattedMessage id='main.info.dresscode.desc' />
        </p>
        <h2 id='gifts'>
          <FormattedMessage id='main.info.gifts' />
        </h2>
        <p>
          <FormattedMessage id='main.info.gifts.desc' />
        </p>
        <p>
          <FormattedMessage id='main.info.gifts.iban' />
        </p>
        <h2 id='accomodation'>
          <FormattedMessage id='main.info.accomodation' />
        </h2>
          <h3>
            <FormattedMessage id='main.info.accommondationZilina' />
          </h3>
        <p>
          <FormattedMessage id='main.info.accommondationZilina.desc' />
        </p>
        <h2 id='services'>
          <FormattedMessage id='main.info.services' />
        </h2>
        <a href='https://livonsaarenosuuskauppa.fi/'>
          <h3>
            <FormattedMessage id='main.info.livonsaarenOsuuskauppa' />
          </h3>
          <div className='Info-imageContainer'>
            <img src={kauppa} alt='kauppa' />
          </div>
        </a>
        <p>
          <FormattedMessage id='main.info.livonsaarenOsuuskauppa.desc' />
        </p>
      </div>
    </section>
  );
};
