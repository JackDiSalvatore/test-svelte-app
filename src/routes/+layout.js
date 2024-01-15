/** @type {import('./$types').LayoutLoad} */
export function load() {
	return {
		navOptions: [
			{ title: 'Home', link: '/' },
			{ title: 'About', link: '/about' },
			{ title: 'Blog', link: '/blog/hello-world' },
			{ title: 'Settings', link: '/settings' },
			{ title: 'Login', link: '/login' },
			{ title: 'Account', link: '/account' },
			{ title: 'Counter', link: '/counter' },
			{ title: 'Pokemon', link: '/pokemon'}
		]
	}
}