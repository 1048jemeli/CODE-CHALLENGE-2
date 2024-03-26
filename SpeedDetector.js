function speedDetector(speed){
    //Call the function in order for it to get executed
    //parameters:variables that are placed inside a function
    let limitSpeed=70
    //Variable to store the value of the limitspeed
        let demerits=5
    //Variable to store the value of the demerits   
        let demeritPoints=1
    //Variable to store the points of the demerits
        let overSpeed=speed-limitSpeed
    //Variable to store the output of overspeed
        let points=(overSpeed/demerits)
    //Variable to store the value of points
        let excess=60
    //Variable to store the value of excess
        let highSpeed=limitSpeed + excess
    //Variable to store the value of highSpeed
        if (speed<= limitSpeed){
    //Executes if the condition is met
            console.log("ok")
    //if condition is met, display ok to the console
        }
        else if(speed >= highSpeed){
    //Executes if the condition is not met
            console.log("Lisence suspended")
    //if condition is not met, display lisence suspended to the console
        }
        else if(speed > limitSpeed){
    //Executes if the condtion A and B are both not met
            console.log("Point", + points)
    //if condition A and B are not met, display points to the console
        }
    }
    speedDetector(80)
    //callback function
    