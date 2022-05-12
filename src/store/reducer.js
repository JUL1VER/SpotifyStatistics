import { createReducer } from "@reduxjs/toolkit";
import {contentFetching, 
        setUserName, 
        setRoute, 
        setFilters, 
        setNumberOfContent, 
        setLoading, 
        offLoading, 
        setError, 
        offError} from "./actions";

const initialState = {
    content: [],
    userName: '',
    route: '',
    filters: [],
    numberOfContent: null,
    isLoading: true,
    isError: false
}

export const reducer = createReducer(initialState, builder => {
    builder
        .addCase(contentFetching, (state, action) => {
            state.content = [...state.content, ...action.payload.content];
        })
        .addCase(setUserName, (state, action) => {
            state.userName = action.payload.userName;
        })
        .addCase(setRoute, (state, action) => {
            state.route = action.payload.route;
        })
        .addCase(setFilters, (state, action) => {
            state.filters = action.payload.filters;
        })
        .addCase(setNumberOfContent, (state, action) => {
            state.numberOfContent = action.payload.numberOfContent;
        })
        .addCase(setLoading, state => {
            state.isLoading = true;
        })
        .addCase(offLoading, state => {
            state.isLoading = false;
        })
        .addCase(setError, state => {
            state.isError = true;
        })
        .addCase(offError, state => {
            state.isError = false;
        })
        .addDefaultCase(() => {})
})