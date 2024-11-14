import React from 'react'
import '../style/Login.css'
const Login = () => {
  // const [loginData,setLoginData]=useState({
  //   userId:'',
  //   password:''
  // });
  return (
    <div className='login'>
      <h1>Login</h1>
      <form action="">
          <label >user id
            <input type="text" placeholder='userid'/>
          </label><br />
          <label >password
            <input type="text" placeholder='password'/>
          </label><br />
          <label >password
            <input type="password" placeholder='password'/>
          </label><br />
          <button>
            Login
          </button>
          <p>Dont have account? <a href="/signup">Signup</a></p>
      </form>
    </div>
  )
}

export default Login;




