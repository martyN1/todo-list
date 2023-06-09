import {nanoid} from 'nanoid'
import {get} from 'svelte/store'
import {newTodoText, todos} from '../store'

export function addTodo() {
    todos.update((todos) => [
        ...todos,
        {
            uuid: nanoid(),
            text: get(newTodoText),
            done: false,
            createdAt: new Date()
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
                return {...todo, done: true}
            }
            return todo
        })
    )
}

export function editTodo(uuid, newText) {
    todos.update((todos) =>
        todos.map((todo) => {
            if (todo.uuid === uuid) {
                return {...todo, text: newText}
            }
            return todo
        })
    )
}

export function deleteTodo(uuid) {
    todos.update((todos) => todos.filter((todo) => todo.uuid !== uuid))
}
