<script>
	import { TrashIcon } from 'svelte-feather-icons'
	import { get } from 'svelte/store'
	import { deleteTodo, setTodoAsDone } from '../services/TodoService'
	import { currentEmoji, doneTodos, mode } from '../store'

	export let uuid = ''
	export let text = ''
	export let done = false

	function handleCheck() {
		setTodoAsDone(uuid)
	}

	function handleDeleteButtonClick() {
		deleteTodo(uuid)
		console.log('hola')
		if (get(doneTodos).length === 0) {
			mode.set('default')
		}
	}
</script>

<div class="todo">
	{#if done}
		{#if $mode === 'delete'}
			<button class="trashButton" on:click={handleDeleteButtonClick}>
				<TrashIcon size="24" />
			</button>
		{:else}
			<span class="doneEmoji">{$currentEmoji}</span>
		{/if}
	{:else}
		<button class="doneCheckbox" on:click={handleCheck} />
	{/if}
	<p class={done ? 'done' : ''}>
		{text}
	</p>
</div>

<style>
	.todo {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		gap: 24px;
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
</style>