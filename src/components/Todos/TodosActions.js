import { RiDeleteBin2Fill, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';

function TodosActions({ resetTodos, deleteCompletedTodos }) {
	return (
		<>
			<Button title="Reset Todos" onClick={resetTodos}>
				<RiRefreshLine />
			</Button>
			<Button title="Clear Completed Todos" onClick={deleteCompletedTodos}>
				<RiDeleteBin2Fill />
			</Button>
		</>
	);
}

export default TodosActions;
