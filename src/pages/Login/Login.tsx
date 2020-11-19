import React, {FC} from "react";
import Layout from "../../components/Layout/Layout";
import LoginForm from "../../components/LoginForm";

type LoginPageProps = {};

const LoginPage: FC<LoginPageProps> = () => {
  return (
    <Layout type='form'>
      <LoginForm />
    </Layout>
  )
};

export default LoginPage;
