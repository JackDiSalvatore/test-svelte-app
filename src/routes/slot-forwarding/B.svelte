<script>
	import C from './C.svelte';
</script>

<C>
	<slot name="b-header" slot="header" let:counter {counter} />
</C>
