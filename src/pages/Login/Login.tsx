import React, {FC, useEffect} from "react";
import {useHistory} from 'react-router-dom';
import Layout from "../../components/Layout/Layout";
import LoginForm from "../../components/LoginForm";
import {useSelector} from "react-redux";
import {isLoginedSelector} from "../../redux/store/auth/selectors";
import ROUTES from "../../constants/routes";

type LoginPageProps = {};

const LoginPage: FC<LoginPageProps> = () => {
  const isLogined = useSelector(isLoginedSelector);
  const history = useHistory();

  useEffect(() => {
    if (isLogined) {
      history.replace(ROUTES.MAIN_PATH);
    }
  }, [isLogined]);

  return (
    <Layout type='form'>
      <LoginForm />
    </Layout>
  )
};

export default LoginPage;
