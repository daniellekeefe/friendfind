const friends = require("../data/friends");

module.exports = function (app) {
    // Return all friends found in friends.js as JSON
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);

        // Receive user details (name, photo, scores)
        let user = req.body;

        // parseInt allows the string to be used as an interger. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
        for (let i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        // default friend match is the first friend but result will be whoever has the minimum difference in scores.... a friend is better than no friend
        let bestFriendIndex = 0;
        let minimumDifference = 40; //max score 50 and min is 10 (40 is that delta)

        //for-loop, starts off with a zero difference and compare the user and the ith friend scores, 1:1
        //difference is added to the total difference
        for (let i = 0; i < friends.length; i++) {
            let totalDifference = 0;
            for (let j = 0; j < friends[i].scores.length; j++) {
                let difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
            }

            // if there is a new minimum, change the best friend index and set the new minimum
            if (totalDifference < minimumDifference) {
                bestFriendIndex = i;
                minimumDifference = totalDifference;
            }
        }

        // after finding match, add user to friend array (check this out @link friend find on bottom of home/survey :).......)
        friends.push(user);

        // send back to browser the best friend match
        res.json(friends[bestFriendIndex]);
    });
};