"use client"

import { useRouter } from "next/navigation"
import { useDispatch } from 'react-redux'

import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import toast from "react-hot-toast"

import { AppDispatch } from "@/redux/store"
import { login } from "@/redux/loginSlice"
import { fetchToken } from "@/actions"
import { LoginFormProps } from "@/types"

import { Button, Card, Grid, Typography } from "@mui/material"
import styles from '@/styles/Login.module.scss'



export default function Login() {

    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm()

    let token: string = ''

    const onsubmit = async (data: LoginFormProps) => {

        //I don't know why post request is not working and I got below error:
        //-->Unexpected token 'u', "username a"... is not valid JSON<--
        //I test this address with postman and that was correct
        //I don't know what is wrong with my code. So, I simulate fetching token to continue the login by adding lines 27 & 38
        //So login form works with any username & password
        //I would be very grateful if you mention my mistake
        
        //const token = await fetchToken(data.username as string, data.password as string)

        token = 'eyJhbGciOiJIUzI1NiIsInR'

        if (token) {
            dispatch(login())
            router.push('/cart')
        } else {
            toast.error('Wrong credentials')
        }
    }


    return (
        <Grid item xs={12}>
            <Card className={styles.container}>
                <form
                    onSubmit={handleSubmit(onsubmit)}
                    className={styles.form}
                >
                    <label htmlFor="username">user name</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="johnd2"
                        className={styles.inputStyle}
                        {...register('username', { required: 'username is required' })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="username"
                        render={({ message }) => <Typography style={{ color: 'red' }}>{message}</Typography>}
                    />
                    <label htmlFor="password">password</label>
                    <input
                        type="text"
                        id="password"
                        placeholder="m38rmF$"
                        className={styles.inputStyle}
                        {...register('password', { required: 'password is required' })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="password"
                        render={({ message }) => <Typography style={{ color: 'red' }}>{message}</Typography>}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        className={styles.submit}
                    >Login
                    </Button>
                </form>
            </Card>
        </Grid>
    )
}