const userProfile = {
    firstName: "Chioma",
    lastName: "Tunde",
    gender: "Female",
    age: 23,
    hobbies: ["reading", "dancing", "singing"]
};
console.log(userProfile)

// Spread Operator
const updatedProfile = {
    ...userProfile, email: "abodunrintopseen@gmail.com"
};
console.log(updatedProfile)

// Destructuring
const {firstName, age} = userProfile;
console.log(firstName)

// const hobbies = userProfile.hobbies;
// console.log(hobbies[1])

const[hobbies] = userProfile.hobbies;
console.log(...hobbies)
