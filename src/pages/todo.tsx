import type { NextPage } from 'next';
import { SyntheticEvent, useState } from 'react';
import { UiLabel, UiButton, UiInput } from '../components/generic';
import { TodoList } from '../components/todo/TodoList';
import { useTodoList } from '../hooks/useTodoList';

const Todo: NextPage = () => {
	const [inputValue, setInputValue] = useState('');
	const todoList = useTodoList();

	async function handleItemAdding(event: SyntheticEvent) {
		event.preventDefault();

		if (inputValue.trim() === '') return;

		await todoList.addItem({
			title: inputValue,
			expiresAt: new Date(Date.now() + 100000),
		});

		debugger;

		setInputValue('');
	}

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		setInputValue(event.target.value);
	}

	return (
		<section className="flex items-center h-full flex-col gap-4 p-10">
			<h1 className="text-2xl font-semibold">Todo List</h1>

			<div className="w-full max-w-[600px] flex flex-col gap-4">
				<form className="flex gap-2">
					<UiLabel>
						<UiInput
							placeholder='What needs to be done?'
							value={inputValue}
							onChange={handleInputChange}
						/>
					</UiLabel>

					<UiButton
						type="submit"
						onClick={handleItemAdding}
					>Add</UiButton>
				</form>

				{
					todoList.listQuery.isLoading
					  ? <p>Loading...</p>
					  : todoList.listQuery.isError
					    ? <p>Error while fetching! Please, try again!</p>
					    : todoList.listQuery.isFetched && todoList.listQuery.data
					      ? <TodoList
									items={todoList.listQuery.data}
									onItemDelete={todoList.deleteItem}
									onItemUpdate={todoList.updateItem}
								/>
					      : <p>Something went totally wrong! Please, contact the developers</p>
				}
			</div>
		</section>
	);
};

export default Todo;
