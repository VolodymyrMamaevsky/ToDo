import { RiDeleteBin2Fill, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';

function TodosActions() {
	return (
		<>
			<Button title="Reset Todos">
				<RiRefreshLine />
			</Button>
			<Button title="Clear Completed Todos">
				<RiDeleteBin2Fill />
			</Button>
		</>
	);
}

export default TodosActions;