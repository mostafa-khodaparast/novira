"use client"

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch,useAppSelector } from "@/redux/store"
import { fetchProducts } from "@/redux/ecommerceSlice"
import { ProductProps } from "@/types"
//components
import { ProductCard } from "."
//styles
import { Grid, Typography } from '@mui/material'



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

