<script lang="ts">
	export let data;
</script>

<h1>{data.name}</h1>

<img src={data.sprites.front_default} alt="front-default"/>

<h3>Abilities</h3>
<ul>
	{#each data.abilities as ability}
		<li>{ability.ability.name}</li>
	{/each}
</ul>

<h3>Moves</h3>
<ul>
	{#each data.moves as move}
		<li>{move.move.name}</li>
	{/each}
</ul>