<script>
	import C from './C.svelte';
</script>

<C>
	<svelte:fragment slot="header">
		<slot name="b-header" />
	</svelte:fragment>
</C>
