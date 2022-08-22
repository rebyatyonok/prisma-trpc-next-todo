import { TodoItem } from '@prisma/client';
import React from 'react';
import { UiButton } from '../generic';

export type TodoListProps = {
  items: TodoItem[],
  onItemDelete: (item: TodoItem) => any
  onItemUpdate: (item: TodoItem) => any
};

export const TodoList = React.memo(({ items, onItemDelete, onItemUpdate }: TodoListProps) => {
	if (items.length === 0) {
		return <p>There is nothing to do!</p>;
	}

	function handleDoneToggle(item: TodoItem) {
		const toggledItem: TodoItem = { ...item, done: !item.done };

		onItemUpdate(toggledItem);
	}

	return (
		<ul className="flex flex-col gap-2">
			{ items.map(item => (
				<li className="grid grid-cols-[auto,1fr,auto] gap-2 p-2 items-center bg-slate-300" key={item.id}>
					<input type="checkbox" checked={item.done} onChange={() => handleDoneToggle(item)}/>
					<span>{item.title}</span>

					<UiButton onClick={() => onItemDelete(item)} type="button">
            delete
					</UiButton>
				</li>
			)) }
		</ul>
	);
});

TodoList.displayName = 'TodoList';
