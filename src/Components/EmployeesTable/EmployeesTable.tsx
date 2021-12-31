import React from 'react';
import { RootState } from '../../store';
import { useAppSelector } from "../../hooks";
import { Employee, Employees } from '../../Store/Employees';
import {StyledSection} from "../../styles/styles";
import "../../styles/EmployeesTable.scss";
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import Help from '../Help/Help';


/**
 * @component
 * @description Component EmployeesTable is the component who show a table, with all of our employees and there datas
 */
const EmployeesTable:React.FC = () => {

	// Fetch our employees state array
	const employees: Employees = useAppSelector((state: RootState) => state.employees);
	// console.log(employees.employees);
	const employeeList: Employee[] = employees.employees;

	// Default settings for the table ag-grid component
	const defaultColDef: object = {
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
				>

					<AgGridColumn field="lastName" width={120} filter="agTextColumnFilter" sortable={true} ></AgGridColumn>
					<AgGridColumn field="firstName" width={120} filter="agTextColumnFilter" sortable={true} ></AgGridColumn>
					<AgGridColumn field="department" width={160} filter="agTextColumnFilter" sortable={true} ></AgGridColumn>
					<AgGridColumn field="startDay"  width={120} filter="agDateColumnFilter" sortable={true} ></AgGridColumn>
					<AgGridColumn field="birthDate" width={120} filter="agDateColumnFilter" ></AgGridColumn>
					<AgGridColumn field="street" width={200} sortable={false} ></AgGridColumn>
					<AgGridColumn field="zipcode" width={110} filter="agNumberColumnFilter" ></AgGridColumn>
					<AgGridColumn field="city" width={120} filter="agTextColumnFilter" sortable={true} ></AgGridColumn>
					<AgGridColumn field="state" width={460} filter="agTextColumnFilter" sortable={true} ></AgGridColumn>
					
				</AgGridReact>
			</StyledSection>
		</>
	)
}

export default EmployeesTable;
