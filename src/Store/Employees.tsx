import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import MockedDatas from '../Mocks/MockedDatas';

export interface Employee {
  firstName: string,
  lastName: string,
  birthDate: string,
  startDay: string,
  street: string,
  city: string,
  state: string,
  zipcode: number | string,
  department: string,
}
export interface Employees {
  employees: Employee[]
}

const initialState: Employees = {
  employees: MockedDatas
}
console.log(initialState)

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
    },
    deleteEmployee: (state) => {
    //   state.employees -= 1
    },
    modifyEmployee: (state, action: PayloadAction<number>) => {
    //   state.employees += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addNewEmployee, deleteEmployee, modifyEmployee } = employeeSlice.actions

export default employeeSlice.reducer