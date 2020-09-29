import { Box, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import React, { useRef } from 'react'


export default function Signup() {

    const formRef = useRef();

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log('form submitted')
    }

    return (
        <Box display="flex" height="100vh" justifyContent="center" alignItems="center">
            <Box maxWidth={400}>
                <Paper>
                    <Box p={4}>
                        <Typography variant="h4" gutterBottom align="center">
                            Sign Up
                        </Typography>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <Grid container spacing={1}>
                            <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="text"
                                        placeholder="full name"
                                        variant="outlined"
                                        size="small"
                                        required
                                    />
                                </Grid>
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
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="password"
                                        placeholder="confirm password"
                                        variant="outlined"
                                        size="small"
                                        required
                                    />
                                </Grid>
                            </Grid>
                        </form>
                        <Box mt={2}>
                            <Button onClick={()=>formRef.current.requestSubmit()} variant="contained" color="primary" fullWidth>Create Account</Button>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}
