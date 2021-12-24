import React from 'react';
import { RootState } from '../../store';
import { useAppSelector, useAppDispatch } from "../../hooks"
import { AppDispatch } from '../../store';
import { Employee, Employees } from '../../Store/Employees';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import styled, { StyledComponent } from "styled-components";
import "./EmployeesTable.scss"	


import MaterialTable from 'material-table'

const StyledSection: StyledComponent<"section", any, {}, never> = styled.section`
	margin-top: 60px;
	/* background-color: #00000035; */
	/* padding-left: 20px; */
	border-radius: 20px;
	/* backdrop-filter: blur(5px); */
`

const EmployeesTable = () => {

	// Fetch our employees state array
	const employees: Employees = useAppSelector((state: RootState) => state.employees);
	console.log(employees.employees);
	const employeeList = employees.employees
	// const dispatch: AppDispatch = useAppDispatch();

	const defaultColDef = {
		resizable: true,
		suppressSizeToFit: true,
		suppressColumnVirtualisation: true,
		filter: true,
		sortable: true
	};

// 	comparator = (
//     filterLocalDateAtMidnight: Date,
//     cellValue: any
// ) => number;

	const gridOptions = {

		defaultColDef: {
			resizable: true,
			suppressSizeToFit: true,
			suppressColumnVirtualisation: true,
			filter: true,
			sortable: true
		},

		columnDefs: [

			{field: "lastName", width: 120, filter: "agTextColumnFilter", sortable: true},
			// column definition configured to use a date filter
			{
				field: 'date',
				filter: 'agDateColumnFilter',
				// add extra parameters for the date filter
				filterParams: {
					// provide comparator function
					comparator: (filterLocalDateAtMidnight: Date, cellValue: any) => {
						const dateAsString = cellValue;
						console.log(dateAsString)
						if (dateAsString == null) {
							return 0;
						}

						// In the example application, dates are stored as dd/mm/yyyy
						// We create a Date object for comparison against the filter date
						const dateParts = dateAsString.split('-');
						const day = Number(dateParts[2]);
						const month = Number(dateParts[1]) - 1;
						const year = Number(dateParts[0]);
						const cellDate = new Date(year, month, day);

						console.log(cellDate)
						// Now that both parameters are Date objects, we can compare
						if (cellDate < filterLocalDateAtMidnight) {
							return -1;
						} else if (cellDate > filterLocalDateAtMidnight) {
							return 1;
						}
						return 0;
					}
				}
			}
		],

		// other grid options ...
	}

	return (
		
	 	<StyledSection  className="ag-theme-alpine"  style={{height: 400, width: "80%"}}>
            <AgGridReact
            	rowData={employeeList}
	 		   defaultColDef={defaultColDef}
	 		   colResizeDefault='shift'
				
	 		   >
				{/* <div className="XXX"> */}

                <AgGridColumn field="lastName" width={120} filter="agTextColumnFilter" sortable={true} ></AgGridColumn>
                <AgGridColumn field="firstName" width={120} filter="agTextColumnFilter" sortable={true} ></AgGridColumn>
                <AgGridColumn field="department" width={160} filter="agTextColumnFilter" sortable={true} ></AgGridColumn>
                <AgGridColumn field="startDay" width={120} filter="agDateColumnFilter" sortable={true} ></AgGridColumn>
                <AgGridColumn field="birthDate" width={120} filter="agDateColumnFilter" ></AgGridColumn>
                <AgGridColumn field="street" width={200} sortable={false} ></AgGridColumn>
                <AgGridColumn field="zipcode" width={110} filter="agNumberColumnFilter" ></AgGridColumn>
                <AgGridColumn field="city" width={120} filter="agTextColumnFilter" sortable={true} ></AgGridColumn>
                <AgGridColumn field="state" width={475} filter="agTextColumnFilter" sortable={true} ></AgGridColumn>
				{/* </div> */}
            </AgGridReact>
        </StyledSection>
	)
}

export default EmployeesTable
