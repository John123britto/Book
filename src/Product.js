import React from 'react';
import { GoogleLogout } from 'react-google-login';


function Product() {
const id="1059458629765-i2p0824nn1baqi51nso3k1cgdgjg5b75.apps.googleusercontent.com";
const onSuccess=(res)=>{
  console.log('Logout Sucess',res);
}



return (
 
  <GoogleLogout
    clientId={id}
    buttonText='Logout'
    onLogoutSuccess={onSuccess}
  />
    
  
);

}
export default Product;
