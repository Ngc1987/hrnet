import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {MockedEmployees} from '../Mocks/MockedDatas';
import { Employee, Employees } from '../models/models';

// Initialize the state with mocked datas
const initialState: Employees = {
  employees: MockedEmployees
}
console.log(initialState)

// Create actions on reducers
export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addNewEmployee: (state, action: PayloadAction<Employee>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.employees = [
        ...state.employees,
        {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          birthDate: action.payload.birthDate,
          startDay: action.payload.startDay,
          street: action.payload.street,
          city: action.payload.city,
          state: action.payload.state,
          zipcode: action.payload.zipcode,
          department: action.payload.department
        }
      ]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addNewEmployee} = employeeSlice.actions;

export default employeeSlice.reducer;