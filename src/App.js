import { Provider } from 'react-redux';
import { HashRouter, Redirect, Route } from 'react-router-dom';
import s from './App.module.css';
import DetailsContainer from './components/Details/DetailsContainer';
import Header from './components/Header/Header';
import WeatherContainer from './components/Weather/WeatherContainer';
import store from './redux/store';

const App = () => {
  return (
    <HashRouter>
    <Provider store={store}>
    <div className={s.appWrapper}>
    <Header />
    <div className={s.appWrapperContent}>
      <Route exact path="/" render={() =><Redirect from="/" to="/cities" />}/>
      <Route exact path="/cities" render={ () => <WeatherContainer /> } /> 
      <Route exact path="/cities/:cityName" render={ () => <DetailsContainer /> } /> 
    </div>

    </div>
    </Provider>
    
    </HashRouter>
    
  );
}

export default App;
