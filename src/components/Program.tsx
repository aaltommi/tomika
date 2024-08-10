import { FormattedMessage } from 'react-intl';
import './Program.scss';
import programsvk from '../img/program_svk.png';
import programfin from '../img/program_fin.png';

import { useRecoilValue } from 'recoil';
import { currentLanguage } from '../atoms/language';
export const Program = () => {
  
  const language = useRecoilValue(currentLanguage);
  return (
    <section className='Program'>
      <div>
      <h2>
        <FormattedMessage id='main.program.consecration' />
      </h2>
      <h2>13:00</h2>
      {/* <h2>14:00</h2> */}
      <p>
        <FormattedMessage id='main.program.consecration.desc' />
      </p>
      </div>
      <div>
        
      {language === "sk" &&
        <div className="program-image-container">
          <img className="program-image" src={programsvk} alt='Menu' />
        </div>
      }
      {language === "fi" &&
          <div className="program-image-container">
            <img className="program-image" src={programfin} alt='Menu' />
          </div>
      }
      </div>
      {/* <p>
        <FormattedMessage id='main.program.lunch' />
      </p>
      <h2>15:00</h2>
      <p>
        <FormattedMessage id='main.program.coffee' />
      </p>
      <h2>21:00</h2>
      <p>
        <FormattedMessage id='main.program.consert' />
      </p> */}
    </section>
  );
};
