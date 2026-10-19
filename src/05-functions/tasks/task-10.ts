/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

type Enrollment = typeof enrollments[number];

function totalEnrollments(): number {
    return enrollments.length;
}

function completedCount(): number {
    return enrollments.filter(e => e.completed).length;
}

function incompleteCount(): number {
    return totalEnrollments() - completedCount();
}

function completionPercentage(): number {
    return completedCount() / totalEnrollments() * 100;
}

function highestScore(): number {
    return Math.max(...enrollments.map(e => e.score));
}

function lowestScore(): number {
    return Math.min(...enrollments.map(e => e.score));
}

function averageScore(): number {
    return enrollments.reduce((sum, e) => sum + e.score, 0) / totalEnrollments();
}

function passingCount(): number {
    return enrollments.filter(e => e.score >= 75).length;
}

function courseCount(course: string): number {
    return enrollments.filter(e => e.course === course).length;
}

function courseAverage(course: string): number {
    const scores = enrollments.filter(e => e.course === course);
    return scores.reduce((sum, e) => sum + e.score, 0) / scores.length;
}

function totalHours(): number {
    return enrollments.reduce((sum, e) => sum + e.duration, 0);
}

function averageDuration(): number {
    return totalHours() / totalEnrollments();
}

function printCourseReport(course: string): void {
    console.log(course, "Students:", courseCount(course));
    console.log(course, "Average Score:", courseAverage(course));
}

function printDashboard(): void {
    console.log("=== Learning Dashboard ===");
    console.log("Total Enrollments:", totalEnrollments());
    console.log("Completed:", completedCount());
    console.log("Incomplete:", incompleteCount());
    console.log("Completion Percentage:", completionPercentage() + "%");
    console.log("Highest Score:", highestScore());
    console.log("Lowest Score:", lowestScore());
    console.log("Average Score:", averageScore());
    console.log("Passing Students:", passingCount());
    printCourseReport("TypeScript");
    printCourseReport("Database");
    printCourseReport("Backend");
    console.log("Total Learning Hours:", totalHours());
    console.log("Average Learning Duration:", averageDuration(), "hours");
}

printDashboard();