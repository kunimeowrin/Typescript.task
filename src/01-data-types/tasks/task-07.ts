/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type StudentCourse = {
    studentId: string,
    fullName: string,
    grade: number,
    courseID: string,
    courseTitle: string,
    instructorName: string,
}

const course1: StudentCourse = {
    studentId: "1234567890",
    fullName: "Hugo Vittorio",
    grade: 89,
    courseID: "GB025",
    courseTitle: "How to use VSCO",
    instructorName: "Serena Rena",
}

const course2: StudentCourse = {
    studentId: "0987654321",
    fullName: "Reyden Rain",
    grade: 98,
    courseID: "BD098",
    courseTitle: "Web Development",
    instructorName: "Saire Rain",
}

const course3: StudentCourse = {
    studentId: "13468097531",
    fullName: "Jessica Mourn",
    grade: 75,
    courseID: "HG087",
    courseTitle: "Database Management",
    instructorName: "Ririna Rain",
}

console.log(course1, course2, course3)