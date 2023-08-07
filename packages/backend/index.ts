import appRouter from "./router";
import Koa from 'koa'
import {createKoaMiddleware} from "trpc-koa-adapter";
import logger from "koa-logger";

const app = new Koa()
const adapter = createKoaMiddleware({
    router: appRouter,
    prefix: '/trpc'
});
app.use(adapter)
app.use(logger())
app.listen(3000)
export type AppRouter = typeof appRouter
