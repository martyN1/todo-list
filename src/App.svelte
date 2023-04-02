<script>
    import ActionsBar from './components/actionBars/ActionsBar.svelte'
    import TodoList from './components/TodoList.svelte'
</script>

<div class="wrapper">
    <header>
        <img class="logo" src="logo.png" alt=""/>
        <h1>Todo List</h1>
    </header>

    <section>
        <div class="todoList">
            <TodoList/>
        </div>

        <div class="actionsBar">
            <ActionsBar/>
        </div>
    </section>
</div>

<footer>
    Made with ♥️ by martyN1
</footer>

<style>
    .wrapper {
        max-width: 600px;
        margin: 40px auto 16px;
        height: calc(100vh - 92px);
        border-radius: 32px;
        background-color: var(--light-gray);
        padding: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    header {
        margin-top: 16px;
        margin-bottom: 24px;
    }

    .logo {
        position: absolute;
        left: 16px;
        top: 16px;
        width: 48px;
        height: 54px;
    }

    h1 {
        font-family: 'Lilita One', cursive;
        flex-grow: 1;
        text-align: center;
        color: var(--black);
    }

    section {
        height: 100%;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
    }

    .todoList {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: end;
        overflow-y: hidden;
        margin-top: 12px;
        margin-bottom: 12px;
    }

    footer {
        height: 36px;
        font-family: 'Roboto Mono', monospace;
        font-size: 14px;
        text-align: center;
    }

    @media only screen and (hover: none) and (pointer: coarse) {
        .wrapper {
            border-radius: 0;
            margin: 0 auto;
            height: 100vh;
        }

        section {
            flex-direction: column;
        }

        footer {
            display: none;
        }
    }
</style>
