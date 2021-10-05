function solution(command) {
    const commands = {
        'upvote': () => { this.upvotes++ },
        'downvote': () => { this.downvotes++ },
        'score': () => {
            let totalScore = this.upvotes - this.downvotes;
            let totalVotes = this.upvotes + this.downvotes;
            // let obfuscatedVotes = 0
            // if (totalVotes > 50) {
            //     obfuscatedVotes = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
            // }
            // let upvoteRating = this.upvotes + obfuscatedVotes;
            // let downvoteRating = this.downvotes + obfuscatedVotes;    !!!!!!!! this is incorrect
            let inflationAmount = Math.ceil(Math.max(this.downvotes, this.upvotes) * 0.25);
            let inflatedUpvotes = totalVotes > 50 ? this.upvotes + inflationAmount : this.upvotes;
            let inflatedDownvotes = totalVotes > 50 ? this.downvotes + inflationAmount : this.downvotes;

            let rating = 'new'
            if (totalVotes < 10) {
                rating = 'new'
            } else if ((this.upvotes / totalVotes) > 0.66) {
                rating = 'hot';
            } else if (this.downvotes <= this.upvotes && totalVotes > 100) {
                rating = 'controversial';
            } else if (this.upvotes < this.downvotes) {
                rating = 'unpopular';
            }
            return [inflatedUpvotes, inflatedDownvotes, totalScore, rating]

        }
    }
    return commands[command]()
}





let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score)
for (let i = 0; i < 50; i ++){
    solution.call(post, 'downvote');
}
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score)