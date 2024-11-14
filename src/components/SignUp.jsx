import React,{useState} from 'react'

function SignUp() {
  const[fornData,setFormdata]=useState({
    userName:'',
    email:'',
    mobile:'',
    password:'',
    conformPasword:''
})
const handleChange=(e) =>{
  setFormdata({...fornData,[e.target.name]:e.target.value});
};

const handleSignup=()=>{
  if(FormData.password!=FormData.conformPasword){
    alert("password not match plz check it once again");
  }
  else{
    alert("user created successfully");
  };
}


  return (
    <div>
      <h1>Sign up</h1>
      <input type="text"
        name='username'
        placeholder='username'
        onChange={handleChange }
      />
          <br/>
      <input type="email"
        name='username'
        placeholder='username'
        onChange={ handleChange}
      />
        <br/>
      <input type="email"
        name='email'
        placeholder='email'
        onChange={ handleChange}
      />
        <br/>
      <input type="text"
        name='mobile'
        placeholder='Mobile'
        onChange={ handleChange}
      />
        <br/>
      <input type="password"
        name='password'
        placeholder='password'
        onChange={handleChange }
      />
          <br/>
      <input type="password"
        name='conformPassword'
        placeholder='Conform Password'
        onChange={ handleChange}
      />
          <br/>
      <button onClick={handleSignup }>Create New User </button>

    </div>
  )
}

export default SignUp;
