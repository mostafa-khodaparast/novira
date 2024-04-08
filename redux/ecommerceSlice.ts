import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { InitialStateProps, ProductProps, ShoppingCardProps } from "@/types"


const initialState: InitialStateProps = {
    products: [],
    shoppingCard: [],
    loading: false,
    error: ''
}

export const fetchProducts = createAsyncThunk(
    'ecommerce/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            return response.json()
        }
        catch (error) {
            return rejectWithValue(error)
        }
    }
)


const ecommerceSlice = createSlice({
    name: 'ecommerce',
    initialState,
    reducers: {
        increaseItemQuantity(state, action: PayloadAction<number>) {
            const item = state.shoppingCard.find((item: ShoppingCardProps) => item.id === action.payload)
            if (item) {
                item.quantity++
            } else {
                state.shoppingCard.push({ id: Number(action.payload), quantity: 1 })
            }
        },
        decreaseItemQuantity(state, action: PayloadAction<number>) {
            const item = state.shoppingCard.find((item: ShoppingCardProps) => item.id === action.payload)
            if (item) {
                item.quantity--
                if (item?.quantity === 0) {
                    ecommerceSlice.caseReducers.deleteItem(state, action)
                }
            }
        },
        deleteItem(state, action: PayloadAction<number>) {
            state.shoppingCard = state.shoppingCard.filter(item => item.id !== action.payload)
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<ProductProps[]>) => {
                state.loading = false
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || ''
            })
    }
})

export const {
    increaseItemQuantity,
    decreaseItemQuantity,
    deleteItem
} = ecommerceSlice.actions
export default ecommerceSlice.reducer