//first name
//last name
//email
//password
//state
//country
//courseCount
//isLoggedInFromFacebook
//isLoggedInFromGoogle
const uid = "dd001";
var firstName = "Deep";
var lastName = "Das";
var email = "deep.das@science.christuniversity.in";
var password = "deepdas1234567890";
var state = "Karnataka";
var country = "India";
var courseCount = 0;
var isLoggedInFromGoogle = true;
var isLoggedInFromFacebook = false;

console.log(`
    Details of the user are given below:
    UID:- ${uid}
    First Name:- ${firstName}
    Last Name:- ${lastName}
    Email ID:- ${email}
    Password:- ${password}
    State:- ${state}
    Country:- ${country}
    Course Enrolled (Default):- ${courseCount}
    Google Log in:- ${isLoggedInFromGoogle}
    Facebook Log in:- ${isLoggedInFromFacebook}
`);