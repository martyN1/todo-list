<script>
	import { currentEmoji } from '../store'
	export let emoji = '✅'

	function handleClick() {
		currentEmoji.set(emoji)
	}
</script>

<button on:click={handleClick} class={emoji === $currentEmoji ? 'selected' : 'unselected'}>
	{emoji}
</button>

<style>
	button {
		cursor: pointer;
		font-size: 24px;
		background-color: var(--light-gray);
		border-radius: 100px;
		border: none;
		width: 48px;
		height: 48px;
	}

	.selected {
		background-color: var(--gray);
	}
</style>
