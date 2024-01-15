<script lang="ts">
	import { setContextCounter, getContextCounter } from '../../context/contextCounter';

	// Set context
	setContextCounter();

	// Get the "store" from the "context"
	const contextCounter = getContextCounter();
  
	function updateCount(event) {
		event.deltaY < 0 ? ($contextCounter += 1) : ($contextCounter -= 1)
	}
</script>

<div on:wheel={updateCount}>
	<p>Grandparent: {$contextCounter}</p>
	<slot />
</div>
