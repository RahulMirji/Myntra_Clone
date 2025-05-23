import { createSlice} from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchSatatus',
  initialState: {
    fechDone:false, // false: 'PENDING' AND true :'DONE'
    currentlyFetching:false,
  },

  reducers: {
    markFetchDone: (state) => {
      return state.fechDone=true;
    
    },
    markFetchingStarted: (state) => {
      return state.currentlyFetching = true;
    
    },
    markFetchingFinished: (state) => {
      return state.currentlyFetching= false;
    
    },
  }
});

export const fetchStatusSliceActions = fetchStatusSlice.actions;
export default fetchStatusSlice;

 