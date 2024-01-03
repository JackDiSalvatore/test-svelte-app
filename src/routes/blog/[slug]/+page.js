import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {

	try {
		return {
			title: `Title for "${params.slug}" goes here`,
			content: `Content for "${params.slug}" goes here`,
			parentData: `Parent Blog data goes here`
		};
	} catch (e) {
		error(404, 'Not found ' + e);
	}
}
