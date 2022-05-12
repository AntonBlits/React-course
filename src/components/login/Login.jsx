import React, { useEffect } from "react";
import s from "../login/login.module.css";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reduser"
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'all' });

   useEffect(() => {
      reset();
   }, [props.onSubmit]);

   return (
      <form onSubmit={handleSubmit(props.onSubmit)}>
         <div>
            <input className={errors.email && s.error} {...register('email', {
               required: "Your input is required! "
            })} placeholder="Email" />
            {errors?.email && <div style={{ color: 'red' }}>{errors.email.message}</div>}
         </div>
         <div>
            <input className={errors.password && s.error} {...register('password', {
               required: 'Your input is required!',
               minLength: {
                  value: 10,
                  message: 'Your input mast have minLength 10!'
               }
            })} placeholder="Password" type='password' />
            {errors?.password && <div style={{ color: 'red' }}>{errors.password.message}</div>}
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

   const onSubmit = (data) => {
      let { email, password, rememberMe } = data;
      props.login(email, password, rememberMe);
   }
   if (props.isAuth) {
      return <Navigate replace to={'/profile/' + props.userId} />
   }

   return <div className={s.email}>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
   </div>
}

const mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      userId: state.auth.userId
   }
}

export default connect(mapStateToProps, { login })(Login);