<script>
    import {SettingsIcon} from 'svelte-feather-icons'
    import {mode} from '../../store.js'

    function handleButtonClick() {
        mode.set('settings')
    }
</script>

<button class="actionButton yellow" on:click={handleButtonClick}>
    <SettingsIcon size="24"/>
</button>

<style>
    .yellow {
        background-color: var(--yellow);
    }
</style>