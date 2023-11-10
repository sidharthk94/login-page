import './App.css';
import SignIn from './Componence/SignIn/SignIn';
import SignUp from './Componence/SignUp/SignUp';

function App() {
  return (
    <div className="app">
      <div className='signIn'>
          <SignIn/>
      </div>
      <div className='signUp'>
        <SignUp/>
      </div>
    </div>
  );
}

export default App;
