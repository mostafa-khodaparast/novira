import Image from "next/image"
import Link from "next/link"

import { ProductProps } from "@/types"
//styles
import { Box, Card, CardContent, Typography, Grid } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined'
import styles from '@/styles/ProductCard.module.scss'


export default function ProductCard({ product }: { product: ProductProps }) {
    return (
        <Grid item xs={12} md={4}>
            <Link href={`products/${product.id}`} className={styles.linkStyle}>
                <Card className={styles.cardStyle} >
                    <Image
                        src={product.image}
                        width={150}
                        height={150}
                        alt="not found"
                        className={styles.cardImage}
                    />
                    <CardContent className={styles.cardContentStyle}>
                        <Typography className={styles.cardTitle}>
                            {product.title}
                        </Typography>
                        <Box className={styles.cardPrice}>
                            <MonetizationOnRoundedIcon />
                            <Typography className={styles.price} >
                                {product.price}
                            </Typography>
                        </Box>
                        <Box className={styles.rateStyle}>
                            <Box className={styles.rate}>
                                <StarIcon />
                                <Typography className={styles.rateText}>
                                    {product.rating.rate}
                                </Typography>
                            </Box>
                            <Box className={styles.category}>
                                <CategoryOutlinedIcon />
                                <Typography className={styles.categoryText}>
                                    {product.category}
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    )
}
