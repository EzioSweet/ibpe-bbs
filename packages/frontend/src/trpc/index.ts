import { createSWRProxyHooks } from "@trpc-swr/client";
import type { AppRouter } from "@ibpe-bbs/backend";
import {createWSClient, httpBatchLink, wsLink} from "@trpc/client";


export const trpc = createSWRProxyHooks<AppRouter>({
    links: [
        httpBatchLink(
            {
                url:"/trpc"
            }
        )
    ],
});
