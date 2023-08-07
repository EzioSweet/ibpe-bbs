import {publicProcedure, router} from "../trpc";

import db from "../utils/db";
import type {BBSArticle} from "../models/bbs";


const appRouter = router({
    userLine: publicProcedure.query(async ()=>{
        const users = await db<BBSArticle>("bbs_article").where("id",100).first()
        console.log("被调用"+(users!==undefined?users.pub_date:""))
        return users
    })
});

export default appRouter
