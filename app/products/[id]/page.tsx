"use client"

import Image from "next/image"
import { useDispatch } from 'react-redux'

import { useAppSelector,AppDispatch } from "@/redux/store"
import { decreaseItemQuantity, deleteItem, increaseItemQuantity } from "@/redux/ecommerceSlice"
//styles
import { Box, Button, Grid, Typography } from "@mui/material"
import StarIcon from '@mui/icons-material/Star'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined'
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded'
import styles from '@/styles/ProductDetail.module.scss'


type ParamsProps = {
    id: string
}

function page({ params }: { params: ParamsProps }) {
    const { products, shoppingCard } = useAppSelector(state => state.ecommerce)
    const dispatch = useDispatch<AppDispatch>()

    const product = products.find(product => product.id === Number(params.id))
    const productQuantity = shoppingCard.find(item => item.id === Number(params.id))?.quantity

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
        <Grid container>
            <Box className={styles.detail}>
                <Grid item xs={12} md={5}>
                    <Image
                        src={product?.image as string}
                        width={400}
                        height={500}
                        alt="not found"
                        className={styles.image}
                    />
                </Grid>
                <Grid item xs={12} md={7}>
                    <Box className={styles.content}>
                        <Typography sx={{ fontSize: '2rem' }}>
                            {product?.title}
                        </Typography>
                        <Typography>
                            {product?.description}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box className={styles.box}>
                                <MonetizationOnRoundedIcon />
                                <Typography className={styles.text}>
                                    {product?.price}
                                </Typography>
                            </Box>
                            <Box className={styles.box}>
                                <CategoryOutlinedIcon />
                                <Typography className={styles.text}>
                                    {product?.category}
                                </Typography>
                            </Box>
                            <Box className={styles.box}>
                                <StarIcon />
                                <Typography className={styles.text}>
                                    {product?.rating.rate}
                                </Typography>
                            </Box>
                        </Box>
                        {!productQuantity
                            ? <Button
                                variant="contained"
                                onClick={() => handleIncrease(Number(params.id))}
                            >
                                add to cart
                            </Button>
                            : <Box className={styles.quantityStyle}>
                                <Button
                                    variant="contained"
                                    onClick={() => handleIncrease(Number(params.id))}
                                >
                                    +
                                </Button>
                                <Typography sx={{ fontWeight: 'bold' }}>
                                    {productQuantity}
                                </Typography>
                                <Button
                                    variant="contained"
                                    onClick={() => handleDecrease(Number(params.id))}
                                >
                                    -
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={() => handleDelete(Number(params.id))}
                                >
                                    delete
                                </Button>
                            </Box>
                        }
                    </Box>
                </Grid>
            </Box>
        </Grid>
    )
}

export default page