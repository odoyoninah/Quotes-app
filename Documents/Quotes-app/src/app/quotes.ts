export class Quotes {
    // id:number;
    // quote:string;
    // upvotes:number;
    // downvotes:number;
    // name:string;
    // author:string;

    public upvotes: number;
    public downvotes: number;
    constructor(public id:number, public quote:string, 
          public name:string,public author:string,public created_at:Date)
         {
        this.id = id;
        this.quote = quote;
        this.upvotes = 0;
        this.downvotes = 0;
        this.name = name;
        this.author = author;

    }
}

