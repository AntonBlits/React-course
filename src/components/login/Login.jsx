import React from "react";
import s from "../login/login.module.css";
import { useForm } from "react-hook-form";

const LoginForm = (props) => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm();

   const onSubmit = (data) => {
      console.log(data);
      reset();
   }
   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div>
            <input {...register('login')} placeholder="Login" />
         </div>
         <div>
            <input {...register('password')} placeholder="Password" type='password' />
         </div>
         <div>
            <input {...register('rememberMe')} type="checkbox" /> remember me
         </div>
         <div>
            <button>Login</button>
         </div>
      </form>
   )
}

const Login = (props) => {
   return <div className={s.login}>
      <h1>Login</h1>
      <LoginForm />
   </div>
}

export default Login;