import {derived, writable} from 'svelte/store'

const storedMode = localStorage.mode
export const mode = writable(storedMode || 'default') // default, insert, settings, delete
mode.subscribe((value) => (localStorage.mode = value))

const storedCurrentEmoji = localStorage.currentEmoji || '✅'
export const currentEmoji = writable(storedCurrentEmoji)
currentEmoji.subscribe((value) => (localStorage.currentEmoji = value))

const storedTodos = localStorage.todos
export const todos = writable(storedTodos ? JSON.parse(storedTodos) : [])
todos.subscribe((value) => (localStorage.todos = JSON.stringify(value)))

export const sortedTodos = derived(todos, ($todos) =>
    [...$todos].sort((a, b) => Number(a.done) - Number(b.done))
)

export const doneTodos = derived(todos, ($todos) =>
    $todos.filter((todo) => todo.done)
)

export const newTodoText = writable('')