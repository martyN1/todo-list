<script>
    import {PlusIcon} from 'svelte-feather-icons'
    import {newTodoText} from '../../store.js'
    import {addTodo} from '../../services/TodoService.js'

    function handleButtonClick() {
        addTodo()
        newTodoText.set('')
    }
</script>

<button class="actionButton green" on:click={handleButtonClick}>
    <PlusIcon size="24"/>
</button>

<style>
    .green {
        background-color: var(--green);
    }
</style>