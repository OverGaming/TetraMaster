import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        inits: 0
    },
    reducers: {
        setName: (state, { payload }) => {
            console.log('hola', payload)
            state.name = payload
        },
        increment: (state) => {
            state.inits += 1
        }
    }
})

export const { increment, setName } = counterSlice.actions
export const selectInits = (state) => state?.inits
export const selectName = (state) => state?.name
export default counterSlice.reducer
