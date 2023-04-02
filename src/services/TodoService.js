import { nanoid } from 'nanoid'
import { get } from 'svelte/store'
import { todos, newTodoText } from '../store'

export function addTodo() {
	todos.update((todos) => [
		...todos,
		{
			uuid: nanoid(),
			text: get(newTodoText),
			done: false,
		},
	])
}

export function deleteDoneTodos() {
	todos.update((todos) => todos.filter((todo) => !todo.done))
}

export function setTodoAsDone(uuid) {
	todos.update((todos) =>
		todos.map((todo) => {
			if (todo.uuid === uuid) {
				return { ...todo, done: true }
			}
			return todo
		})
	)
}

export function deleteTodo(uuid) {
	todos.update((todos) => todos.filter((todo) => todo.uuid !== uuid))
}
