export default {
	async fetch(request: Request, env: Env) {
		const { method, body } = request;

		const proxyHeaders = new Headers(request.headers);
		proxyHeaders.set('Authorization', `Bearer ${env.OPENAI_API_KEY}`);

		const proxyURL = new URL(request.url);
		proxyURL.protocol = 'https';
		proxyURL.host = 'api.openai.com';
		proxyURL.port = '443';

		return fetch(proxyURL, {
			method,
			headers: proxyHeaders,
			body,
		});
	},
};