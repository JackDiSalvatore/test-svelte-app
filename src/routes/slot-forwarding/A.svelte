<script>
	import B from './B.svelte';
</script>

<B>
	<div slot='b-header' let:counter>
		<h1>Header from A: { counter }</h1>
	</div>
</B>
