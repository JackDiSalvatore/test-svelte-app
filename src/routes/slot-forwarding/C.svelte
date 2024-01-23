<script>
	/**
     * @type {number}
     */
	let counter = 0;
</script>

<slot name="header" { counter }/>
<button on:click={() => { counter++ }}>{ counter }</button>
<slot name="content"/>
<slot name="footer"/>
