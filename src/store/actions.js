import { createAction } from "@reduxjs/toolkit";

export const contentFetching = createAction('CONTENT_FETCHING', (content) => {
    return {
        payload: {
            content
        }
    }
});
export const setUserName = createAction('SET_USER_NAME', (userName) => {
    return {
        payload: {
            userName
        }
    }
});
export const setRoute = createAction('SET_ROUTE', (route) => {
    return {
        payload: {
            route
        }
    }
});
export const setFilters = createAction('SET_FILTERS', (filters) => {
    return {
        payload: {
            filters
        }
    }
});
export const setNumberOfContent = createAction('SET_NUMBER_OF_CONTENT', (numberOfContent) => {
    return {
        payload: {
            numberOfContent
        }
    }
});
export const setLoading = createAction('SET_LOADING');
export const offLoading = createAction('OFF_LOADING');
export const setError = createAction('SET_ERROR');
export const offError = createAction('OFF_ERROR');

