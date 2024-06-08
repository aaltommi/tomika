import { FormattedMessage } from 'react-intl';
import './Info.scss';

import kastiel from '../img/kastiel_gate.jpg';

import { useRecoilValue } from 'recoil';

import { currentLanguage } from '../atoms/language';

export const Info = () => {
  
  
  const language = useRecoilValue(currentLanguage);
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
        {language == "fi" &&
        <div>
          <p>
          <FormattedMessage id='main.info.flights'/>
          </p>
          <p>
          <FormattedMessage id='main.info.trainsAndBusses' />
          </p>
          <p>
            <FormattedMessage id='main.info.arrivingToCastle' />
          </p>
          <p>
            <FormattedMessage id='main.info.arrivingToCastle.decs' />
          </p>
          <p>
            <FormattedMessage id='main.info.askTommi' />
          </p>
        </div>
        }
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
        {language == "fi" &&
          <p>
            <FormattedMessage id='main.info.gifts.iban'/>
          </p>
        }
        <h2 id='accomodation'>
          <FormattedMessage id='main.info.accomodation' />
        </h2>
        <h3>
          <FormattedMessage id='main.info.accommondationZilina' />
        </h3>
        <p>
          <FormattedMessage id='main.info.accommondationZilina.desc' />
        </p>
      </div>
    </section>
  );
};
