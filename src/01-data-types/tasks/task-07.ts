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

type Registration = {
    studentId: string;
    studentName: string;
    gradeLevel: number;
    courseId: string;
    courseTitle: string;
    instructor: string;
    learningHours: number;
    registrationDate: string;
    paymentCompleted: boolean;
};

let registration1: Registration = {
    studentId: "ST001",
    studentName: "Haruto Sato",
    gradeLevel: 11,
    courseId: "C001",
    courseTitle: "Web Programming",
    instructor: "Yuki Tanaka",
    learningHours: 40,
    registrationDate: "2026-03-02",
    paymentCompleted: true
};

let registration2: Registration = {
    studentId: "ST002",
    studentName: "Sakura Suzuki",
    gradeLevel: 10,
    courseId: "C002",
    courseTitle: "Python Programming",
    instructor: "Kenji Yamamoto",
    learningHours: 35,
    registrationDate: "2026-02-03",
    paymentCompleted: true
};

let registration3: Registration = {
    studentId: "ST003",
    studentName: "Ren Nakamura",
    gradeLevel: 12,
    courseId: "C003",
    courseTitle: "Java Programming",
    instructor: "Aiko Watanabe",
    learningHours: 45,
    registrationDate: "2026-03-05",
    paymentCompleted: false
};

console.log(registration1);
console.log(registration2);
console.log(registration3);