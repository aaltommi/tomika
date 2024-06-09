import { FormattedMessage } from 'react-intl';
import './Program.scss';

export const Program = () => {
  return (
    <section className='Program'>
      <h2>
        <FormattedMessage id='main.program.consecration' />
      </h2>
      <h2>13:00</h2>
      {/* <h2>14:00</h2> */}
      <p>
        <FormattedMessage id='main.program.consecration.desc' />
      </p>
      <h2>
        <FormattedMessage id='main.program.beingUpdated' />
      </h2>
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
