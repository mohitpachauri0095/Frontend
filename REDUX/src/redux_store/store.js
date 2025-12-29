import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux_store/features/counterSlice.js';
const store = configureStore ({
    reducer: {
        counter: counterReducer
        
    }
})