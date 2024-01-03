<script>
    export let data;
</script>

<style>
    a {
        padding: 0.5rem;
    }
</style>

<nav>
    {#each data.navOptions as nav}
        <a href={nav.link}>{nav.title}</a>
    {/each}
</nav>

<!-- App "page" goes here -->
<slot></slot>
