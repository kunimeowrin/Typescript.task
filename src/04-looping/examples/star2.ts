let startopAmount = 0;
let starbottomAmount = 0;

for (let i = 0; i <= 3; i++) {
    for (let j = 0; j < i; j++) {
        startopAmount++;
        process.stdout.write("");
    }
    process.stdout.write("\n");
}
for (let i = 2; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        starbottomAmount++;
        process.stdout.write("");
    }
    process.stdout.write("\n");
}