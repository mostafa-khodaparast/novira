export type ProductProps = {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
    rating: RatingProps
    quantity?: number
}

export type RatingProps = {
    rate: number,
    count: number
}



export type ShoppingCardProps = {
    id: number,
    quantity: number
}

export type InitialStateProps = {
    products: ProductProps[],
    shoppingCard: ShoppingCardProps[],
    loading: boolean,
    error: string
}


export type LoginProps = {
    isAuthenticated: boolean,
    token: string,

}

export type LoginFormProps = {
    username?: string,
    password?: string
}