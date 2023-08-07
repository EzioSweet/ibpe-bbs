import knex from "knex";
const db = knex({
    client:"better-sqlite3",
    connection:{
        filename:"./assets/db.sqlite3",
    },
    useNullAsDefault:true,
    pool:{
        max:10,
        min:2
    }
})

export default db
