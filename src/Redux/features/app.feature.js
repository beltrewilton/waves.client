import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    position: 0.0001,
    playing: false,
    ytUrl: "",
}

const _seek = (state, action) => {
    console.log('redux: ', action.payload)
    state.position = action.payload
}

const _play = (state, action) => {
    console.log('_play: ', action.payload)
    state.playing = action.payload
}

const _ytbe = (state, action) => {
    state.ytUrl = action.payload
}

const appSlice = createSlice({
    name: 'appx',
    initialState: initialState,
    reducers: {
        seek: _seek,
        play: _play,
        ytbe: _ytbe,
    }
})

export const { seek, play, ytbe } = appSlice.actions;
export default appSlice.reducer;
