<script>
    // @ts-nocheck
    import Todo from './Todo.svelte'
    import {doneTodos, mode, sortedTodos} from '../store'
</script>

<div>
    {#if $mode === 'delete'}
        {#each $doneTodos as todo}
            <Todo {...todo}/>
        {/each}
    {:else}
        {#each $sortedTodos as todo}
            <Todo {...todo}/>
        {/each}
    {/if}
</div>

<style>
    div {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 24px 12px;
        overflow-y: scroll;
    }

    @media (pointer: coarse) {
        div {
            flex-direction: column-reverse;
        }
    }
</style>
