import React, {Suspense, lazy, FC} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';

const LoginPage = lazy(() => import('../../pages/Login/Login'));
const MainPage = lazy(() => import('../../pages/Main/Main'));

const App: FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route exact path='/main' component={MainPage}/>
          <Route path='/login' component={LoginPage}/>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
