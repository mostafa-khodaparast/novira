import { useAppSelector } from "@/redux/store";
import { ShoppingCardProps } from "@/types";
import { Box, Button, Card, Typography } from "@mui/material";
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded'
import Image from "next/image";
import { useDispatch } from 'react-redux'
import { AppDispatch } from "@/redux/store"
import { decreaseItemQuantity, deleteItem, increaseItemQuantity } from "@/redux/ecommerceSlice"
import styles from '@/styles/CartItem.module.scss'
import Link from "next/link";



export default function CartItem({ cart }: { cart: ShoppingCardProps }) {
    const { products } = useAppSelector(state => state.ecommerce)
    const product = products.find(product => product.id === Number(cart.id))
    const dispatch = useDispatch<AppDispatch>()

    let totalPrice = 0
    if (product) {
        totalPrice = product.price * cart.quantity
    }

    const handleIncrease = (id: number) => {
        dispatch(increaseItemQuantity(id))
    }

    const handleDecrease = (id: number) => {
        dispatch(decreaseItemQuantity(id))
    }

    const handleDelete = (id: number) => {
        dispatch(deleteItem(id))
    }

    return (
        <Card className={styles.boxStyle}>
            <Link href={`products/${cart.id}`}>
                <Image
                    src={product?.image as string}
                    width={140}
                    height={140}
                    alt="not found"
                    className={styles.imageStyle}
                />
            </Link>
            <Box className={styles.contentStyle}>
                <Typography sx={{ fontSize: '1rem' }}>
                    {product?.title}
                </Typography>
                <Box className={styles.priceStyle}>
                    <MonetizationOnRoundedIcon />
                    <Typography>
                        {totalPrice}
                    </Typography>
                </Box>
                <Box className={styles.cartStyle}>
                    <Button
                        size="small"
                        variant="contained"
                        onClick={() => handleIncrease(cart.id)}
                        className={styles.btnStyle}
                    >
                        +
                    </Button>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        {cart.quantity}
                    </Typography>
                    <Button
                        size="small"
                        variant="contained"
                        onClick={() => handleDecrease(cart.id)}
                        className={styles.btnStyle}
                    >
                        -
                    </Button>
                    <Button
                        size="small"
                        variant="contained"
                        onClick={() => handleDelete(cart.id)}
                        className={styles.btnStyle}
                    >
                        delete
                    </Button>
                </Box>
            </Box>
        </Card>
    )
}

