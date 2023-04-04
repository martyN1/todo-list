<script>
    import {CheckIcon, TrashIcon, XIcon} from 'svelte-feather-icons'
    import {get} from 'svelte/store'
    import {deleteTodo, editTodo, setTodoAsDone} from '../services/TodoService'
    import {currentEmoji, doneTodos, language, mode} from '../store'
    import {formatDate} from '../services/DateService.js'

    export let uuid = ''
    export let text = ''
    export let done = false

    export let createdAt

    let editMode = false
    let editTodoInput
    let uneditedText

    function handleCheck() {
        setTodoAsDone(uuid)
    }

    function handleDeleteButtonClick() {
        deleteTodo(uuid)
        if (get(doneTodos).length === 0) {
            mode.set('default')
        }
    }

    function handleTodoClick() {
        uneditedText = text
        editMode = true
        setTimeout(() => {
            editTodoInput.focus()
            editTodoInput.select()
        }, 100)
    }

    function handleSubmit() {
        if (text !== '') {
            editTodo(uuid, text)
        }

        editMode = false
    }

    function handleCancelEdit() {
        text = uneditedText
        editMode = false
    }
</script>

<div class="todo">
    {#if done}
        {#if $mode === 'delete'}
            <button class="trashButton" on:click={handleDeleteButtonClick}>
                <TrashIcon size="24"/>
            </button>
        {:else}
            <span class="doneEmoji">{$currentEmoji}</span>
        {/if}
    {:else}
        <button class="doneCheckbox" on:click={handleCheck}/>
    {/if}
    <div class="todoContent">
        {#if editMode}
            <div class="editWrapper">
                <form on:submit|preventDefault={handleSubmit}>
                    <input class="editTodo" type="text" name="todo" id="todo" bind:value={text}
                           bind:this={editTodoInput}>
                </form>
                <div class="confirmButton" on:click={handleSubmit}>
                    <CheckIcon size="24"/>
                </div>
                <div class="cancelButton" on:click={handleCancelEdit}>
                    <XIcon size="24"/>
                </div>

            </div>
        {:else}
            <p class={done ? 'done' : ''} on:click={handleTodoClick}>
                {text}
            </p>
        {/if}
        <p class="date">{formatDate(createdAt, $language)}</p>
    </div>

</div>

<style>
    .todo {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 24px;
    }

    .todoContent {
        width: 100%;
    }

    .editWrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px
    }

    .editTodo {
        font-family: 'Roboto Mono', monospace;
        font-weight: 700;
        color: var(--black);
        font-size: 14px;
        font-style: italic;

        background-color: transparent;
        width: 100%;
        border: none;
    }

    form {
        flex: 1
    }

    .confirmButton {
        color: var(--green);
    }

    .cancelButton {
        color: var(--red);
    }

    p {
        font-family: 'Roboto Mono', monospace;
        font-weight: 700;
        color: var(--black);
        font-size: 14px;
    }

    .done {
        text-decoration: line-through;
    }

    .doneEmoji {
        font-size: 24px;
    }

    .doneCheckbox {
        min-width: 24px;
        height: 24px;
        background-color: var(--white);
        border-radius: 4px;
        border: 2px solid var(--black);
        cursor: pointer;
    }

    .trashButton {
        color: var(--red);
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    .date {
        color: var(--dark-gray);
        font-size: 12px;
        font-weight: 300;
    }
</style>
