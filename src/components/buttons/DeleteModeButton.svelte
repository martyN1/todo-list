<script>
    import {TrashIcon} from 'svelte-feather-icons'
    import {mode} from '../../store.js'

    function handleButtonClick() {
        mode.set('delete')
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