export interface BBSArticle {
    id:number
    title: string
    content:string
    pub_date:string
    mod_date:string
    attached_file?:string
    set_top:number
    author_id:number
    category_id:number
    check:number
}
