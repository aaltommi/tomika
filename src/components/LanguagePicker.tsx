import { useSetRecoilState } from 'recoil';
import { currentLanguage } from '../atoms/language';
import './LanguagePicker.scss';

export const LanguagePicker = () => {
  const setLang = useSetRecoilState(currentLanguage);

  // TODO:
  return (
    <h1 className='LanguagePicker'>
      <button onClick={(e) => setLang('fi')}>fi</button> |{' '}
      <button onClick={(e) => setLang('sk')}>sk</button>
    </h1>
  );
};
