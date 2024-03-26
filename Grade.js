function studentGrade(mark){
    if(mark < 0 || mark > 100){
        console.log("Invalid input. Please enter a number between 0 to 100")
        return;
    }
    if (mark>=79){
        console.log("A")
    }
    else if(mark>=60){
        console.log("B")
    }
    else if(mark>=49){
        console.log("C")
    }
    else if(mark>=40){
        console.log("D")
    }
    else if(mark<=39){
        console.log("E")
    }
}
studentGrade(50)