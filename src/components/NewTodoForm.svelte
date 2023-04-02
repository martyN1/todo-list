<script>
    import {newTodoText} from '../store.js'
    import {addTodo} from '../services/TodoService.js'

    function handleSubmitNewTodo() {
        addTodo()
        newTodoText.set('')
    }
</script>

<form on:submit|preventDefault={handleSubmitNewTodo}>
    <input
            bind:value={$newTodoText}
            name="todo"
            type="text"
            placeholder="Type what you need to be done..."
    />
</form>

<style>
    form {
        flex-grow: 1;
    }

    input {
        height: 44px;
        width: 100%;
        border-radius: 100px;
        border: 2px solid var(--black);
        padding: 4px 12px;
        background-color: var(--white);
        color: var(--black);
        font-family: 'Roboto Mono', monospace;
        font-weight: 700;
        font-size: 14px;
    }
</style>