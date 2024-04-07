"use client"

import { fetchProducts } from "@/redux/ecommerceSlice"
import { AppDispatch } from "@/redux/store"
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { ProductProps } from "@/types"
import { useAppSelector } from "@/redux/store"
import { Grid, Typography } from '@mui/material'
import { ProductCard } from "."



export default function Products() {
    const dispatch = useDispatch<AppDispatch>()
    const { products, error } = useAppSelector(state => state.ecommerce)

    
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <Grid container spacing={2}>
            {error && <Typography>{error}</Typography>}
            {products.map((product: ProductProps) => <ProductCard key={product.id} product={product} />)}
        </Grid>
    )
}

