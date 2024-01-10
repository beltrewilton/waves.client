import { configureStore } from "@reduxjs/toolkit"

import appReducer from './features/app.feature.js'

const rootReducer = {
    appx: appReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store;
