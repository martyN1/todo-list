<script>
    import {TrashIcon} from 'svelte-feather-icons'
    import {mode} from '../../store.js'
    import {deleteDoneTodos} from '../../services/TodoService.js'

    function handleButtonClick() {
        deleteDoneTodos()
        mode.set('default')
    }
</script>

<button class="actionButton red" on:click={handleButtonClick}>
    <TrashIcon size="24"/>
</button>

<style>
    .red {
        background-color: var(--red);
    }
</style>