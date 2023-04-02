<script>
    import Emoji from './Emoji.svelte'
</script>

<div>
    <Emoji emoji="✅"/>
    <Emoji emoji="👍"/>
    <Emoji emoji="🙂"/>
    <Emoji emoji="🥳"/>
    <Emoji emoji="😎"/>
    <Emoji emoji="🥰"/>
</div>

<style>
    div {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 8px;
        align-items: center;
    }
</style>