import { Fragment } from 'react';
import Header from './components/Header';
import Auth from './components/Auth'
import Counter from './components/Counter';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile'


function App() {
  const isAuthenticate = useSelector((state) => {
    return state.auth.userAuth;
  })
  console.log(isAuthenticate)
  return (
    <Fragment>
      <Header />
       {isAuthenticate ? <UserProfile/> : <Auth/>}
      <Counter />
    </Fragment>
  );
}

export default App;