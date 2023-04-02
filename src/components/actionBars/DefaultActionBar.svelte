<script>
    import DeleteButton from '../buttons/DeleteModeButton.svelte'
    import SettingsButton from '../buttons/SettingsModeButton.svelte'
    import InsertButton from '../buttons/InsertModeButton.svelte'
    import {doneTodos} from '../../store.js'
</script>

{#if $doneTodos.length > 0}
    <DeleteButton/>
{/if}
<SettingsButton/>
<InsertButton/>