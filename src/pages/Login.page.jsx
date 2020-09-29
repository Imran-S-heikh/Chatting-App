import { Box, Button, ButtonBase, Grid, Paper, TextField, Typography } from '@material-ui/core'
import React, { useRef } from 'react'

import { ReactComponent as FbLogin } from '../assets/svg/fb-login.svg'
import { ReactComponent as GoogleLogin } from '../assets/svg/google-login.svg'

export default function Login() {

    const formRef = useRef();

    const handleSubmit = ()=>{
        console.log('form submitted')
    }

    return (
        <Box display="flex" height="100vh" justifyContent="center" alignItems="center">
            <Box maxWidth={400}>
                <Paper>
                    <Box p={4}>
                        <Typography variant="h4" gutterBottom align="center">
                            Login
                        </Typography>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="email"
                                        placeholder="email"
                                        variant="outlined"
                                        size="small"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="password"
                                        placeholder="password"
                                        variant="outlined"
                                        size="small"
                                        required
                                    />
                                </Grid>
                            </Grid>
                        </form>
                        <Box mt={2}>
                            <Button onClick={()=>formRef.current.requestSubmit()} variant="contained" color="primary" fullWidth>Submit</Button>
                        </Box>
                        <Box my={1}>
                            <Typography align="center" color="textSecondary">or</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
                            <Box>
                                <ButtonBase>
                                    <FbLogin />
                                </ButtonBase>
                            </Box>
                            <Box mt={1}>
                                <ButtonBase>
                                    <GoogleLogin />
                                </ButtonBase>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}
