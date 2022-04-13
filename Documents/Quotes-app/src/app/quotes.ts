export class Quotes {
    id:number;
    quote:string;
    upvotes:number;
    downvotes:number;
    name:string;
    author:string;
    constructor(id:number, quote:string, upvotes:number, downvotes:number, name:string,author:string){
        this.id = id;
        this.quote = quote;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
        this.name = name;
        this.author = author;

    }
}

