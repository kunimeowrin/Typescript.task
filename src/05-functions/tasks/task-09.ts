/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function countAdmitted(): number {
    return patients.filter(p => p.admitted).length;
}

function countDischarged(): number {
    return patients.filter(p => !p.admitted).length;
}

function countDepartment(department: string): number {
    return patients.filter(p => p.department === department).length;
}

function highestBill(): number {
    return Math.max(...patients.map(p => p.bill));
}

function lowestBill(): number {
    return Math.min(...patients.map(p => p.bill));
}

function averageBill(): number {
    return totalRevenue() / patients.length;
}

function totalRevenue(): number {
    return patients.reduce((total, p) => total + p.bill, 0);
}

function admittedNames(): string[] {
    return patients.filter(p => p.admitted).map(p => p.name);
}

function totalPatients(): number {
    return patients.length;
}

function printHospitalReport(): void {
    console.log("Total Patients:", totalPatients());
    console.log("Admitted:", countAdmitted());
    console.log("Discharged:", countDischarged());
    console.log("Pediatrics:", countDepartment("Pediatrics"));
    console.log("Cardiology:", countDepartment("Cardiology"));
    console.log("Orthopedics:", countDepartment("Orthopedics"));
    console.log("Highest Bill: Rp" + highestBill());
    console.log("Lowest Bill: Rp" + lowestBill());
    console.log("Average Bill: Rp" + averageBill());
    console.log("Total Revenue: Rp" + totalRevenue());
    console.log("Admitted Names:", admittedNames().join(", "));
}

printHospitalReport();