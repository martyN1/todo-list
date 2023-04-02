<script>
    import {XIcon} from 'svelte-feather-icons'
    import {mode} from '../../store.js'

    function handleButtonClick() {
        mode.set('default')
    }
</script>

<button class="actionButton gray" on:click={handleButtonClick}>
    <XIcon size="24"/>
</button>

<style>
    .gray {
        background-color: var(--gray);
    }
</style>