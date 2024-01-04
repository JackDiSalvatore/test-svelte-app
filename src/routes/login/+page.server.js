import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
	// const user = await db.getUserFromSession(cookies.get('sessionid'));
	return {
		'user': {
			'name': 'Jack D'
		}
	 };
};

/** @type {import('./$types').Actions} */
export const actions = {
	login: async (event) => {
		// TODO log the user in
		console.log('Logging user in');
		return { success: true };
	},
	register: async (event) => {
		// TODO register the user
		console.log('Registering user');
		redirect(303, '/');
	}
};
