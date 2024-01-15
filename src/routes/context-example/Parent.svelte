<script>
	import { getContextCounter } from '../../context/contextCounter';

	const contextCounter = getContextCounter();
</script>

<div>
	<p>Parent: {$contextCounter}</p>
	<slot />
</div>
