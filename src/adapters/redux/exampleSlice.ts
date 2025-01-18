import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BaseState<D, E> = {
  data: D | null;
  loading: boolean;
  error: E | null;
};

type initialStateType = {
  baseCall: BaseState<string[], any>;
};
const initialState: initialStateType = {
  baseCall: {
    data: [],
    loading: false,
    error: null,
  },
};

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    fetchDataRequest: (state) => {
      state.baseCall.loading = true;
      state.baseCall.error = null;
    },
    fetchDataSuccess: (state, action: PayloadAction<string[]>) => {
      state.baseCall.loading = false;
      state.baseCall.data = action.payload;
    },
    fetchDataFailure: (state, actio: PayloadAction<any>) => {
      state.baseCall.loading = false;
      state.baseCall.error = actio;
    },
  },
});

export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } =
  exampleSlice.actions;
export default exampleSlice.reducer;
