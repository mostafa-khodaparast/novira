"use client"

import { redirect } from "next/navigation"

import { useAppSelector } from "@/redux/store"

import { Card } from "@mui/material"



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
