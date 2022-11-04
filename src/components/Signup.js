import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CredAction } from '../redux/Calendaraction';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, useGoogleLogin  } from '@react-oauth/google';

function Signup() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      // console.log(credentialResponse);
      dispatch(CredAction({'cred':true, 'token':tokenResponse.access_token
    }));
      sessionStorage.setItem('id',tokenResponse.access_token
      );
      navigate('/dashboard');
      console.log(tokenResponse)},
  });
    return (
      <GoogleLogin
      onSuccess={login}
      onError={() => {
        console.log('Login Failed');
      }}
    />
    );
}
export default Signup;