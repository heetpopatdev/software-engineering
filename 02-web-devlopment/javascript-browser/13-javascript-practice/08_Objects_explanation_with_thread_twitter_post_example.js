/*
Thread / Twitter Post
Create an object literal for the properties of thread/ twitter post which includes-
-> username
-> content
-> likes
-> reposts
-> tags
*/

const post = {
  username: "@heetpopat",
  content: "This is my #firstPost",
  likes: 150,
  reposts: 5,
  tags: ["@fullstack", "@web"],
};

post.username; // here username first converted into string then it give the value.
post.content;
post.likes;
post.reports;
post.tags;
post.tags[0];
post.tags[1];
post["username"];
post["content"];
post["likes"];
post["repoosts"];
post["tags"];

// to change or create new property inside object
post.username = "@rahul";
post.gender = "Female";
console.log(post);

//to delete property from object
delete post.city;
delete post.gender;
console.log(post);

//Objects of Object

const classInfo = {
  trump: {
    grad: "A+",
    city: "california",
  },
  Jd_vance: {
    grade: "B+",
    city: "washington dc",
  },
  deva_malam: {
    grade: "Fail",
    city: "Keshod",
  },
};
console.log(classInfo.trump);
console.log(classInfo.Jd_vance);
console.log(classInfo.deva_malam.grade);
classInfo.deva_malam.city = "Junagadh";

// Array of Objects
// Storing information of multiple students

const classInfo = [
  {
    name: "yogi",
    grade: "D-",
    city: "Lucknow",
  },
  {
    name: "eknath",
    grade: "E-",
    city: "Mumbai",
  },
  {
    name: "Mamta",
    grade: "C+",
    city: "Kolkata",
  },
];
console.log(classInfo);
console.log(classInfo[0]);
console.log(classInfo[1]);
console.log(classInfo[2]);

console.log(classInfo[0].name);
console.log(classInfo[1].grade);
console.log(classInfo[2].city);

classInfo[0].name = "Modi";
