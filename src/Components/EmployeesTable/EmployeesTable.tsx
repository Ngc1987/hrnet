import React, { Suspense } from 'react';
import { RootState } from '../../Store/store';
import { useAppSelector } from "../../Store/hooks";
import { Employee, Employees } from '../../models/models';
import {StyledSection} from "../../styles/styles";
import "../../styles/EmployeesTable.scss";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Loading from '../Loading/Loading';

const Help: React.LazyExoticComponent<React.FC<{}>> = React.lazy(() => import("../Help/Help"));
const AgGridReact = React.lazy(() => import("../Utils/AgGridReact"));
const AgGridColumn = React.lazy(() => import("../Utils/AgGridColumn"));

/**
 * Component EmployeesTable is the component who show a table, with all of our employees and there datas
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

	// let data: string ="01/11/1987";
	// const dateParts = data.split('/');
	// 				// const day = parseInt(dateParts[0]);
    //                 // const month = parseInt(dateParts[1]) - 1;
    //                 // const year = Number(dateParts[2]);
	// 				const day = Number(dateParts[0]);
    //                 const month = Number(dateParts[1]) - 1;
    //                 const year = Number(dateParts[2]);
    //                 const cellDate = new Date(year, month, day);
	// 				console.log(dateParts, day, month, year, cellDate)

	// const gridOptions = {
    // columnDefs: [
    //     // column definition configured to use a date filter
    //     {
			
    //         field: 'startDay',
    //         filter: 'agDateColumnFilter',
	// 		suppressAndOrCondition: true,
    //         // add extra parameters for the date filter
    //         filterParams: {
    //             // provide comparator function
    //             comparator: (filterLocalDateAtMidnight: any, cellValue: any) => {
    //                 const dateAsString = cellValue;

    //                 if (dateAsString == null) {
    //                     return 0;
    //                 }

    //                 // In the example application, dates are stored as dd/mm/yyyy
    //                 // We create a Date object for comparison against the filter date
    //                 const dateParts = dateAsString.split('/');
    //                 const day = Number(dateParts[0]);
    //                 const month = Number(dateParts[1]) - 1;
    //                 const year = Number(dateParts[2]);
    //                 const cellDate = new Date(year, month, day);
	// 				// console.log(cellDate)

    //                 // Now that both parameters are Date objects, we can compare
    //                 if (cellDate < filterLocalDateAtMidnight) {
    //                     return -1;
    //                 } else if (cellDate > filterLocalDateAtMidnight) {
    //                     return 1;
    //                 }
    //                 return 0;
    //             }
    //         }
    //     }
    // ],

    // other grid options ...
// }


	return (

		<>
			<Suspense fallback={<Loading/>}>
				<Help/>
				<StyledSection data-testid="employeesTable" className="ag-theme-alpine"  style={{height: 400, width: "80%"}}>
					<AgGridReact
						rowData={employeeList}
						defaultColDef={defaultColDef}
						colResizeDefault='shift'
						// gridOptions={gridOptions}
					>
						<AgGridColumn field="lastName" width={120} filter="agTextColumnFilter" sortable={true} ></AgGridColumn>
						<AgGridColumn field="firstName" width={120} filter="agTextColumnFilter" sortable={true} ></AgGridColumn>
						<AgGridColumn field="department" width={160} filter="agTextColumnFilter" sortable={true} ></AgGridColumn>
						<AgGridColumn field="startDay"  width={120}   ></AgGridColumn>
						<AgGridColumn field="birthDate" width={120}  ></AgGridColumn>
						<AgGridColumn field="street" width={200} sortable={false} ></AgGridColumn>
						<AgGridColumn field="zipcode" width={110} filter="agNumberColumnFilter" ></AgGridColumn>
						<AgGridColumn field="city" width={120} filter="agTextColumnFilter" sortable={true} ></AgGridColumn>
						<AgGridColumn field="state" width={445} filter="agTextColumnFilter" sortable={true} ></AgGridColumn>
					</AgGridReact>
				</StyledSection>
			</Suspense>
		</>
	)
}

export default EmployeesTable;
