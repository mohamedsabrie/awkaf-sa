import Footer from "../components/Footer";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Head from 'next/head'


function LoginPage() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Login />
    </div>
  );
}

export default LoginPage;
