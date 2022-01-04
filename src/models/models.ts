// interface for the departments datas
export interface department {
	value: string;
	label: string;
}

// interface for the american states datas
export interface americanState {
	value: string;
	label: string;
}

// interface for the employees datas
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