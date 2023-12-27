import axios from "axios";
import { endpoints } from "./apis";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS file

import {
  fetchEventsStart,
  fetchEventsSuccess,
  createEventStart,
  createEventSuccess,
  createEventFailure,
  fetchEventsFailure,
} from "../slices/eventSlice"; 



export const getAllEventService = async (dispatch, token) => {
  try {
    dispatch(fetchEventsStart());
    const response = await axios.get(endpoints.getAllEvents, {
      headers: {
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtwQGdtYWlsLmNvbSIsImlkIjoiNjRmNDcxM2QyNTllNjkyODU2NTdjMDI4Iiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNzAwNTQxMzc0LCJleHAiOjE3MDA2Mjc3NzR9.ds1VUbZ3CeWuNa7oJmPPnzabEoahAt5X_XsUpkwt_HI`
      }
    });
    console.log("printing response in json", response.json());
    dispatch(fetchEventsSuccess(response.data));
  } catch (error) {
    dispatch(fetchEventsFailure(error.message));
  }
};


export const createEventService = async (dispatch, eventData) => {
  try {
    dispatch(createEventStart());
    const response = await axios.post(endpoints.createEvent, eventData);
    dispatch(createEventSuccess(response.json()));
    toast.success("Event created successfully!"); // Display a success toast
  } catch (error) {
    dispatch(
      createEventFailure(error.response ? error.response.data : error.message)
    );
    toast.error("Failed to create the event. Please try again."); // Display an error toast
  }
};
