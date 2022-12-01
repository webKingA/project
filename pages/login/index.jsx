import React , {useState} from "react";
import style from "./index.module.css";

// import Icons Start

import {AiOutlineUser} from 'react-icons/ai';
import {RiLockPasswordLine} from 'react-icons/ri';

// import Icons End

const Index = () => {

    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');

    function clickLoginHandler () {
        let data = {
            username : userName,
            password : password,
            rememberMe : true
        }

        fetch('http://62.3.41.67:8090/api/v1/Login/login' , {
            method : "POST",
            headers : {
                'Content-Type' : "application/json"
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            window.localStorage.setItem('token' , data.token);
            data.access.some(item => {
                if (item == 'Admin') {
                    window.location = '/profile-admin';
                } else {
                    window.location = '/profile';
                }
            })
        })

        setUserName('');
        setPassword('');

    }

  return (
    <div className={style.login__container}>
      <div className={style.overlay}></div>
      <div className={style.login__wrappper}>
        <h3>ورود</h3>
        <span>
            <AiOutlineUser />
            <input type="text" placeholder="نام کاربری :" value={userName} onChange={e => setUserName(e.target.value)} />
        </span>
        <span>
            <RiLockPasswordLine />
            <input type="password" placeholder="رمز عبور :" value={password} onChange={e => setPassword(e.target.value)} />
        </span>
        <button onClick={clickLoginHandler}>ورود</button>
      </div>
    </div>
  );
};

export default Index;
