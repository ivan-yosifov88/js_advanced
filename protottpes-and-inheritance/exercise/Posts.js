function createPosts(){
    class Post {
        constructor(title, content){
            this.title = title;
            this.content = content;
        };
        toString(){
            return `Post: ${this.title}\nContent: ${this.content}`
        };
    };
    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        };
        addComment(comment){
            this.comments.push(comment)
        };
        _postDifference(){
            return this.likes - this.dislikes
        };
        toString(){
            if (this.comments.length > 0){
                let commentsText = []
                this.comments.forEach(el => commentsText.push(` * ${el}`))
                let commentsLines = '\nComments:\n' + commentsText.join('\n')
                return super.toString() + `\nRating: ${this._postDifference()}` + `${commentsLines}`
            }
            return super.toString() + `\nRating: ${this._postDifference()}`
        };
    };
    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content);
            this.views = views;
        };
        view(){
            this.views = this.views + 1;
            return this
        };
        toString(){
            return `${super.toString()}\nViews: ${this.views}`
        }
    }




    return {
        Post,
        SocialMediaPost,
        BlogPost,
    }
}



const classes = createPosts();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);


let blog = new classes.BlogPost("TestTitle", "TestContent", 7000);
blog.view()
blog.view()
blog.view()
blog.view()
blog.view()
console.log(blog.toString())

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
