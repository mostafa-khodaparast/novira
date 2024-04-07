"use client"

import { useAppSelector } from "@/redux/store"
import { Card } from "@mui/material"
import { redirect } from "next/navigation"



export default function page() {
  const { isAuthenticated } = useAppSelector(state => state.login)

  if (!isAuthenticated) {
    redirect('/')
  }

  return (
    <Card sx={{ textAlign: 'center', padding: '1rem' }}>
      payment
    </Card>
  )
}
