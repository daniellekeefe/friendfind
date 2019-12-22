# friendfind

## Friend Find Application
### Description
Friend Find: Application that determines your new best friend by evaluating the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). Upon survey submit, an existing user record closest to the current user's responses is returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.

Friend Find application is implemented using a Node.js and Express server.

### Use Friend Find
Deployed to Heroku. Please check it out here. https://desolate-chamber-86419.herokuapp.com

### Installation
To install the application follow the instructions below:

git clone https://github.com/daniellekeefe/friendfind.git
* cd friendfind
* npm install
#### Running Locally
To run the application locally.

export PORT=3000
Once PORT environment set to 3000, run Node.js.
node server.js
The application will now be running locally on PORT. Place http://localhost:3000/ into your browser and take the surver. 