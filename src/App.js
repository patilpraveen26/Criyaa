
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import { Login } from './Components/Login/login';
import { Register } from './Components/Registration/registration';
import { ForgotPass } from './Components/Forgotpass/forgotPass';
import { PassVerification } from './Components/PassVerification/PassVerification';
import { Home } from './Components/Home/home';
import { InvalidPath } from './Components/Invalidpath';

function App() {
  return (
   <div>
    <BrowserRouter>
    <header className=' d-flex justify-content-between bg-dark text-white p-2 mb-2'>
      <h2><Link to='/' style={{textDecoration:'none', color:'white'}}><span className='bi bi-house'></span> Criyaa</Link></h2>
      <div>
        <Link to='/login' className='btn btn-danger me-2'>Login</Link>
        <Link to='/register' className='btn btn-danger'>Register</Link>
      </div>
    </header>
      <section>
        <div className=" bg-dark text-white d-flex justify-content-center align-items-center" style={{height:'100vh'}} >
        
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/forgotpass' element={<ForgotPass/>}/>
            <Route path='/resetpass' element={<PassVerification/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<InvalidPath/>}/>
          </Routes>
        </div>
      </section>
    </BrowserRouter>
   </div>
  );
}

export default App;
