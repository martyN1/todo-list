<script>
    import {PlusIcon} from 'svelte-feather-icons'
    import {mode} from '../../store.js'

    function handleButtonClick() {
        mode.set('insert')
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