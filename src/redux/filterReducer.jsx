import { createAction, createReducer } from "@reduxjs/toolkit";

export const filterAction = createAction("filter/filterAction");

const filterReducer = createReducer("", builder => {
	builder.addCase(filterAction, (state, action) => (state = action.payload));
});

export default filterReducer;
