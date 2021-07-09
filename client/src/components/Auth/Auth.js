import React, {useState} from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from '@material-ui/core';
import {GoogleLogin} from 'react-google-login';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';
import Icon from './icon';


export const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword]= useState(false);
    const [isSignup, setIsSignUp]= useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        e.preventDefault();
    };

    const switchModel = () => {
        setIsSignUp((preIsSignUp)=>!preIsSignUp);
        //handleShowPassword(false);
    };

    const googleSuccess = (res) => {
       console.log(res);
    };

    const googleFailure = () => {
        console.log("Google Sign In was unsuccessful. Try Again Later");
    };

    const handleShowPassword = () => setShowPassword((prevShowPassword)=> !prevShowPassword);

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup &&(
                            <>
                                <Input name ="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                <Input name ="lastName" label="Last Name" handleChange={handleChange}  half/>
                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text": "password"} handleShowPassword={handleShowPassword}/>
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                    </Grid>
                    
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up': 'Sign In'}
                    </Button>
                    <GoogleLogin 
                        clientId="855196303785-fk416viek726vdl5liq0929er5slcnds.apps.googleusercontent.com"
                        render={(renderProps)=>(
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant="contained">
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justify="flex-end">
                        <Button onClick={switchModel}>
                            {isSignup ? 'Already have an account ? Sign In': "Don 't have an account? Sign Up"}
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;