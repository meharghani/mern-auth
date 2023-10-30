import { Outlet } from 'react-router-dom';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './componants/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Header />
      <ToastContainer />
      <Container className='my-2'>
        <Outlet />
      </Container>

    </>
  )
}

export default App
