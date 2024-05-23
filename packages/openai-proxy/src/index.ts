export default {
	async fetch(request: Request, env: Env) {
		const { method, body, headers } = request;

		const userAgent = headers.get('user-agent');
		if (!userAgent || !userAgent.includes('Submap')) {
			return new Response('Forbidden', { status: 403 });
		}

		const proxyHeaders = new Headers(headers);
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