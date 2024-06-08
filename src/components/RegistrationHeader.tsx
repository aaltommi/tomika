import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { DateAndPlace } from './DateAndPlace';
import { Diamond } from './Diamond';
import './RegistrationHeader.scss';

export const RegistrationHeader = () => {
  return (
    <header className='App-header'>
      <h1>
        <Link to='/'>
          <FormattedMessage id='common.monika' />
          <span> &amp; </span>
          <FormattedMessage id='common.tommi' />
        </Link>
      </h1>
      <Diamond />
      <DateAndPlace size='small' />
    </header>
  );
};
