"use client"

import Link from "next/link"
import { useDispatch } from "react-redux"

import { AppDispatch, useAppSelector } from "@/redux/store"
import { logout } from "@/redux/loginSlice"
//styles
import { Button } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home'
import InputIcon from '@mui/icons-material/Input'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import styles from '@/styles/Header.module.scss'


export default function Header() {

    const { isAuthenticated } = useAppSelector(state => state.login)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <nav className={styles.cart}>
            <Link href='/cart'  >
                <LocalMallIcon className={styles.navIcon} />
            </Link>
            <Link href='/'>
                <HomeIcon className={styles.navIcon} />
            </Link>
            {isAuthenticated
                ?
                <Button
                    variant="outlined"
                    className={styles.signoutBtn}
                    onClick={() => dispatch(logout())}
                >
                    sign out
                </Button>
                :
                <Link
                    href='/login'
                    className={styles.signInLink}
                >
                    <InputIcon />
                </Link>
            }
        </nav >
    )
}
