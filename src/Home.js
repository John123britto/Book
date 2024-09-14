import React from 'react';
import { GoogleLogin } from 'react-google-login';

const Home = () => {
  const id="1059458629765-i2p0824nn1baqi51nso3k1cgdgjg5b75.apps.googleusercontent.com";
  const onSuccess=(res)=>{
    console.log('Login Sucess',res);
  }

  const onFailure=(res)=>{
    console.log('Login Failed',res);
  }
  
  return (
    <div>
    <GoogleLogin
      clientId={id}
      buttonText='Login'
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
      
    </div>
  );
};

export default Home;
