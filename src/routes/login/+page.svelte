<script>
	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<h1>User Login</h1>

<form method="POST" action="?/login">
	<label>
		Email
		<input name="email" type="email">
	</label>
	<label>
		Password
		<input name="password" type="password">
	</label>
	<!-- Goes to `login` function in /login/+page.server.js -->
	<button>Log in</button>

	<!-- Goes to `register` function in /login/+page.server.js -->
	<button formaction="?/register">Register</button>
	<button formaction="/login?/register">Register</button>
</form>

<!-- Alternative to `formaction` -->
<form method="POST" action="/login?/register">
	<button>Register</button>
</form>

{#if form?.success}
	<!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
	<p>Successfully logged in! Welcome back, {data.user.name}</p>
{/if}
