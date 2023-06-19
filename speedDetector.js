//function for speed
function speedDetector(speed){
    const speedLimit = 70;
    const kmAboveSpeedLimit = 5;
    const demeritPoints = Math.floor((speed - speedLimit) / kmAboveSpeedLimit);
    const maxDemeritPoints = 12;

    if (speed <= speedLimit){
        console.log("Ok");
    }
    else if(demeritPoints > maxDemeritPoints){
        console.log("License suspended");
    }
    else if(speed > speedLimit){
       console.log('Points:', demeritPoints);
    }
    // return 0;

}

//calling the function and giving it some sample arguments 
speedDetector(10);
speedDetector(80);
speedDetector(1000);