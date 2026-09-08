/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type Attendance = {
    employeeId: string;
    employeeName: string;
    date: string;
    checkIn: string;
    checkOut: string;
    workingHours: number;
    present: boolean;
};

let attendance1: Attendance = {
    employeeId: "EMP001",
    employeeName: "Khasva Semi",
    date: "2026-09-08",
    checkIn: "08:00",
    checkOut: "17:00",
    workingHours: 8,
    present: true
};

let attendance2: Attendance = {
    employeeId: "EMP002",
    employeeName: "JMyesha Orlan",
    date: "2026-09-08",
    checkIn: "08:30",
    checkOut: "17:30",
    workingHours: 8,
    present: true
};

let attendance3: Attendance = {
    employeeId: "EMP003",
    employeeName: "Naufal Tresnta",
    date: "2026-09-08",
    checkIn: "-",
    checkOut: "-",
    workingHours: 0,
    present: false
};

console.log(attendance1);
console.log(attendance2);
console.log(attendance3);