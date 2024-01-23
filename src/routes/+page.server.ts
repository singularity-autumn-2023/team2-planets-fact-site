import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { planets } = await parent();
	redirect(307, `/planet/${planets.data[0].id}/1/?${Math.random()*3600}`);
};
