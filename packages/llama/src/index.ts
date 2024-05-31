/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const body = await request.json();
		const { system, user } = body as Prompt;

		let chat = {
			messages: [
				{ role: 'system', content: system },
				{ role: 'user', content: user },
				{ role: 'user', content: 'Only respond with json answer' },
			],
		};
		let response = await env.AI.run('@cf/meta/llama-3-8b-instruct', chat);

		return Response.json(response);
	},
};
