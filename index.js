//Excercise 1
function distanceFromHqInBlocks(somevalue){
    return Math.abs(somevalue - 42);
}

//Excercise 2
function distanceFromHqInFeet(somevalue){
    const blocks = distanceFromHqInBlocks(somevalue);
    const feetperblock = 264;
    return blocks * feetperblock;
}

//Excercise 3
function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * 264;
}

//Excercise 4
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if(distance <= 400){
        return 0;
    }else if(distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    }else if (distance  > 2000 && distance <= 2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
}

