"use client"

import { useRouter } from "next/navigation"
import { useAppSelector } from "@/redux/store"
import { CartItem } from "@/components"
import { Box, Typography, Button } from "@mui/material"



export default function page() {

  const { shoppingCard, products } = useAppSelector(state => state.ecommerce)
  const { isAuthenticated } = useAppSelector(state => state.login)

  const router = useRouter()

  let totalCost: number = 0
  
  shoppingCard.map(cart => {
    const product = products.find(product => product.id === Number(cart.id))
    if (product) {
      totalCost += product?.price * cart.quantity
    }
  })

  const handlePayment = () => {
    if (isAuthenticated) {
      router.push('/payment')
    } else {
      router.push('/login')
    }
  }

  return (
    <Box>
      {shoppingCard.length === 0
        ? <Typography sx={{ textAlign: 'center' }}>
          empty
        </Typography>
        : <Box>
          <Box sx={{ width:'50%',display: 'flex',flexDirection:'column', alignItem: 'center', justifyContent: 'center', margin:'1rem auto' }}>
            <Typography sx={{textAlign: 'center'}}>
              bill: {totalCost.toPrecision(5)}
            </Typography>
            <Button
              variant='contained'
              onClick={handlePayment}
            >
              payment
            </Button>
          </Box>
          {shoppingCard.map(cart => <CartItem key={cart.id} cart={cart} />)}
        </Box>
      }
    </Box>
  )
}

