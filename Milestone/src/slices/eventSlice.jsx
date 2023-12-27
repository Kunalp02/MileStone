    import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
        events: [],
        loadingEvents: false,
        errorEvents: null,
        token : JSON.parse(localStorage.getItem('token')),
    }

    const eventSlice = createSlice({
        name: 'events',
        initialState,
        reducers: {
            fetchEventsStart(state) {
                state.loadingEvents=true,
                state.errorEvents = null
            },
            fetchEventsSuccess(state, action){
                state.loadingEvents = false;
                state.events = action.payload;
            },
            fetchEventsFailure(state, action){
                state.loadingEvents = false;
                state.errorEvents= action.payload;
            },
            createEventStart(state){
                state.loadingEvents = true;
                state.errorEvents = null; 
            },
            createEventSuccess(state, action){
                state.events.push(action.payload);
                state.loadingEvents = false;
            },
            createEventFailure(state, action){
                state.loadingEvents = false; 
                state.errorEvents = action.payload; 
            }


        }
    })

    export const {
        fetchEventsStart,
        fetchEventsSuccess,
        fetchEventsFailure,
        createEventStart,
        createEventSuccess,
        createEventFailure
    } = eventSlice.actions;

    export default eventSlice.reducer;

