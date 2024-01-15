<script>
	import { getContextCounter } from '../../context/contextCounter';

	const contextCounter = getContextCounter();
</script>

<div>
	<p>Child: {$contextCounter}</p>
</div>
