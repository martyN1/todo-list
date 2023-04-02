<script>
    import CancelButton from '../buttons/CancelButton.svelte'
    import {newTodoText} from '../../store.js'
    import NewTodoForm from '../NewTodoForm.svelte'
    import AddButton from '../buttons/AddTodoButton.svelte'
</script>

<NewTodoForm/>
{#if $newTodoText !== ''}
    <AddButton/>
{:else}
    <CancelButton/>
{/if}