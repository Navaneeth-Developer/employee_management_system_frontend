import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Employee } from "./employeeTypes";
import axios from "axios";

interface EmployeeState {
  data: Employee[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: EmployeeState = {
  data: [],
  status: "idle",
};

export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async () => {
    const response = await axios.get<Employee[]>("/api/employees");
    return response.data;
  }
);

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchEmployees.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectEmployees = (state: { employees: EmployeeState }) =>
  state.employees.data;
export default employeeSlice.reducer;
