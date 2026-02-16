const person = {
    firstName: "Temitope",
    lastName: "Abodunrin",
    age: 20,
}
person.email = "abodunrintopseen@gmail.com"
console.log(person);
person.age = 25;
console.log(person);
console.log(delete person.lastName);
console.log(person);
console.log(person.firstName);

const student = {
    name: "Tope",
    age: 28,
    grade: "A",
}
student.school = "semicolon"
console.log(student);
student.grade = "B";
console.log(student);
console.log(delete student.age);
console.log(student)
console.log(Object.keys(student));
console.log(Object.values(student));

