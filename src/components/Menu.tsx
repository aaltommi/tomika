import menusvk from '../img/menu_svk.png';
import menufin from '../img/menu_fin.png';
import './Menu.scss';

import { useRecoilValue } from 'recoil';
import { currentLanguage } from '../atoms/language';

export const Menu = () => {
  
  const language = useRecoilValue(currentLanguage);
  return (
    <section className='Menu'>
      {language === "sk" &&
          <div className='Info-imageContainer'>
            <img src={menusvk} alt='Menu' />
          </div>
      }
      {language === "fi" &&
          <div className='Info-imageContainer'>
            <img src={menufin} alt='Menu' />
          </div>
      }
    </section>
  );
};
