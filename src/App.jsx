import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Blog from './Components/Blog/Blog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Blog></Blog>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default App;