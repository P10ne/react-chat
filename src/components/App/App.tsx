import React, {Suspense, lazy, FC} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import PrivateRoute from "../PrivateRoute";

const LoginPage = lazy(() => import('../../pages/Login/Login'));
const MainPage = lazy(() => import('../../pages/Main/Main'));

const App: FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <PrivateRoute exact path='/main'>
            <MainPage />
          </PrivateRoute>
          <Route path='/login' component={LoginPage}/>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
