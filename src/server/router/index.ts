// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

// import { exampleRouter } from "./example";
// import { authRouter } from "./auth";
import { todoItemsRouter } from './todoItems';

export const appRouter = createRouter()
	.transformer(superjson)
	.merge('todoItems.', todoItemsRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
