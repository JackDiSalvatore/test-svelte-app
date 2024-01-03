<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h3>{data.title}</h3>
<div>{@html data.content}</div>
