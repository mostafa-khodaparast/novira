"use client"

import { ErrorMessage } from "@hookform/error-message"
import { Button, Card, Grid, Typography } from "@mui/material"
import { useForm } from "react-hook-form"
import styles from '@/styles/Login.module.scss'
import { AppDispatch } from "@/redux/store"
import { useDispatch } from 'react-redux'
import toast from "react-hot-toast"
import { login } from "@/redux/loginSlice"
import { useRouter } from "next/navigation"


type LoginFormProps = {
    username?: string,
    password?: string
}

export default function Login() {

    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm()

    let token: string = ''


    const onsubmit = (data: LoginFormProps) => {
        // fetch('https://fakestoreapi.com/auth/login', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         username: "mor_2314",
        //         password: "83r5^_"
        //     })
        // })
        //     .then(res => res.json())
        //     .then(json => token = json)
        token = 'dfdfdfdfere'

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