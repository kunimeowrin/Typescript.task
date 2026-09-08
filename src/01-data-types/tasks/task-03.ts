/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type Student = {
    studentId: string;
    name: string;
    age: number;
    active: boolean;
};

let student1: Student = {
    studentId: "01002",
    name: "Osana Najimi",
    age: 13,
    active: true
};

let student2: Student = {
    studentId: "01003",
    name: "Pusheen Netta",
    age: 13,
    active: true
};

let student3: Student = {
    studentId: "01004",
    name: "Sairen Iern",
    age: 14,
    active: false
};

console.log(student1);
console.log(student2);
console.log(student3);