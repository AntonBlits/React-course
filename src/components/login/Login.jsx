import React from "react";
import s from "../login/login.module.css";
import { useForm } from "react-hook-form";

const LoginForm = (props) => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'all' });

   const onSubmit = (data) => {
      console.log(data);
      reset();
   }
   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div>
            <input className={errors.login && s.error} {...register('login', {
               required: "Your input is required! "
            })} placeholder="Login" />
            {errors?.login && <div style={{ color: 'red' }}>{errors.login.message}</div>}
         </div>
         <div>
            <input className={errors.password && s.error} {...register('password', {
               required: true,
               minLength: 10
            })} placeholder="Password" type='password' />
            {errors.password?.type === 'required' && <div style={{ color: 'red' }}>Your input is required!</div>}
            {errors.password?.type === 'minLength' && <div style={{ color: 'red' }}>Your input mast have minLength 10!</div>}
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