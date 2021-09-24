import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


function SignUp() {
    const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: 'Green' }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AccountCircleIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign up</h2>
                    <Typography variant='caption'>Please fill this from to signup!</Typography>
                </Grid>

                <form>
                    <TextField fullWidth label='Name' placeholder="enter your name"></TextField>
                    <TextField fullWidth label='Email Id'></TextField>
                    <FormControl component="fieldset" style={{marginTop: '10px'}}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />

                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone Number'></TextField>
                    <TextField fullWidth label='Password'></TextField>
                    <TextField fullWidth label='Confirm Password'></TextField>
                    <Button type='Submit' color='primary' variant='contained'>Sign up</Button>

                </form>

            </Paper>
        </Grid>
    )
}

export default SignUp
