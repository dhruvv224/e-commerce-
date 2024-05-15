import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    SearchQuery: ''
};

const SearchQuerySlice = createSlice({
    name: 'SearchQuery',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.SearchQuery = action.payload;
        }
    }
});

export const { setSearchQuery } = SearchQuerySlice.actions;
export default SearchQuerySlice.reducer;
