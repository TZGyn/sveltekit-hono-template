import { Hono } from 'hono';

// For extending the Zod schema with OpenAPI properties
import 'zod-openapi/extend';
import { resolver, validator as zValidator } from 'hono-openapi/zod';
import { z } from 'zod';

const app = new Hono().post('/', zValidator('json', z.object({})), async (c) => {
	return c.json({ success: true });
});

export { app as TestRoutes };
