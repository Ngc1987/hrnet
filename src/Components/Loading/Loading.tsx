import "../../styles/Loading.scss"
/**
 * @component
 * @description Component Loading, who appears on the fallbacks of React.Suspense, on FOrm and EmployeesTable components
 */
const Loading:React.FC = () =>  {
	return (
		<div data-testid="loader" className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
	)
}

export default Loading;