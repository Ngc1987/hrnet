import React from 'react';
import { RootState } from '../../store';
import { useAppSelector } from "../../hooks"
import { Employees } from '../../Store/Employees';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import {StyledSection} from "../../styles/styles"
import "../../styles/EmployeesTable.scss"

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import Help from '../Help/Help';



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


	return (

		<>
		<Help/>
	 	<StyledSection  className="ag-theme-alpine"  style={{height: 400, width: "80%"}}>
            <AgGridReact
            	rowData={employeeList}
	 		   defaultColDef={defaultColDef}
	 		   colResizeDefault='shift'
				// gridOptions={gridOptions}
				
	 		   >

                <AgGridColumn field="lastName" width={120} filter="agTextColumnFilter" sortable={true} ></AgGridColumn>
                <AgGridColumn field="firstName" width={120} filter="agTextColumnFilter" sortable={true} ></AgGridColumn>
                <AgGridColumn field="department" width={160} filter="agTextColumnFilter" sortable={true} ></AgGridColumn>
                <AgGridColumn field="startDay"  width={120} filter="agDateColumnFilter" sortable={true} ></AgGridColumn>
                <AgGridColumn field="birthDate" width={120} filter="agDateColumnFilter" ></AgGridColumn>
                <AgGridColumn field="street" width={200} sortable={false} ></AgGridColumn>
                <AgGridColumn field="zipcode" width={110} filter="agNumberColumnFilter" ></AgGridColumn>
                <AgGridColumn field="city" width={120} filter="agTextColumnFilter" sortable={true} ></AgGridColumn>
                <AgGridColumn field="state" width={475} filter="agTextColumnFilter" sortable={true} ></AgGridColumn>
				
            </AgGridReact>
        </StyledSection>
				</>
	)
}

export default EmployeesTable;
