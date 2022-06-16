import React, { useEffect } from "react";
import s from "../login/login.module.css";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer"
import { Navigate } from "react-router-dom";

const LoginForm = ({ onSubmit, captchaUrl }) => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'all' });

   useEffect(() => {
      reset();
   }, [onSubmit]);

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
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

         {captchaUrl && <img src={captchaUrl} />}
         <div>
            {captchaUrl &&
               <input  {...register('captcha', {
                  required: 'Your input is required!',
               })} placeholder="Symbols of captcha" />
            }</div>

         <div>
            <button className={s.btn}>Login</button>
         </div>
      </form>
   )
}

const Login = ({ login, isAuth, userId, captchaUrl }) => {

   const onSubmit = (data) => {
      let { email, password, rememberMe, captcha } = data;
      login(email, password, rememberMe, captcha);
   }
   if (isAuth) {
      return <Navigate replace to={'/profile/' + userId} />
   }

   return <div className={s.email}>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
   </div>
}

const mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      userId: state.auth.userId,
      captchaUrl: state.auth.captchaUrl,
   }
}

export default connect(mapStateToProps, { login })(Login);