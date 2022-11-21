// 1. I set up my endpoint in the server file.
// 2. I set up the function in the controller file sending some data.
// 3. I make sure the controller function is connected to the server file and ready to by accessed by the front end.
// 4. I set up a function in the front-end js file with an axios request accessing the endpoint I just set up (you will console.log the data in the .then here).
// 5. I set up a button and give it an eventListener that runs this^ function when it gets clicked on.


const baseURL = `http://localhost:4400`

//here I will have my variables for my landing page which will include my nav bar buttons

const homeButton = document.querySelector('a[href="./home.html"]')
const aboutButton = document.querySelector('a[href="./about/about.html"]')
const loginButton = document.querySelector('#login')
const createLoginButton = document.querySelector('#create-login')
const sendsButton = document.querySelector('a[href="./sends/sends.html"]')
const projectsButton = document.querySelector('a[href="./projects/projects.html"]')
const loginForm = document.querySelector('#login-bar')\
const createLoginForm = document.querySelector('#create-login-bar')



//here I will have my functions for my landing page variables



