<script>
    import {mode} from '../../store.js'
    import DefaultActionBar from './DefaultActionBar.svelte'
    import DeleteActionBar from './DeleteActionBar.svelte'
    import SettingsActionBar from './SettingsActionBar.svelte'
    import InsertActionBar from './InsertActionBar.svelte'
</script>

<div class="actionBar">
    {#if $mode === 'default'}
        <DefaultActionBar/>
    {:else if $mode === 'delete'}
        <DeleteActionBar/>
    {:else if $mode === 'settings'}
        <SettingsActionBar/>
    {:else if $mode === 'insert'}
        <InsertActionBar/>
    {/if}
</div>

<style>
    .actionBar {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 12px;
    }
</style>
