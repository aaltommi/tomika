import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useRecoilValue } from 'recoil';
import { currentLanguage } from './atoms/language';
import { Main } from './pages/Main';
import { Registration } from './pages/Registration';
import { IntlProvider } from 'react-intl';
import { localization } from './constants/localization';

export default function App() {
  const language = useRecoilValue(currentLanguage)
  return (
    <IntlProvider locale={language} messages={localization[language]}>
      <Router>
        <Switch>
          <Route exact path="/:page">
            <div className="App">
              <Main />
            </div>
          </Route>
          <Route path="/registration/:id" component={Registration} />
          <Redirect from="/" to="/program" />
        </Switch>
      </Router >
    </IntlProvider>
  );
}
