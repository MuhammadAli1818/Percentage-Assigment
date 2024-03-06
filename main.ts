let per:number = 65;

if (per >= 80 && per <= 100) {
    console.log("A Grade");
} else if (per >= 60 && per < 80) {
    console.log("B Grade");
} else if (per >= 45 && per < 60) {
    console.log("C Grade");
} else if (per >= 33 && per < 45) {
    console.log("D Grade");
} else if (per < 33) {
    console.log("You are Failure");
} else {
    console.log("Please enter the valid Percentage");
}