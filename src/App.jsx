import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <ToastContainer />
    </>
  );
};

export default App;