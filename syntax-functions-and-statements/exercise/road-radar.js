function lookAfterSpeedLimits(speed, areaOfDriving){
    let driverSpeed = Number(speed);
    let speedLimit = getSpeedLimit(areaOfDriving);
    function getSpeedLimit(areaOfDriving){
        let currentSpeed;
        switch (areaOfDriving) {
            case 'motorway':
                currentSpeed = 130;
                break;
            case 'interstate':
                currentSpeed = 90;
                    break;
            case 'city':
                currentSpeed = 50;
                break;
            case 'residential':
                currentSpeed = 20;
                break;
        }
        return currentSpeed
    }

    function printMessage(driverSpeed, speedLimit){
        let status = '';
        let difference
        
        if (driverSpeed <= speedLimit){
            console.log(`Driving ${driverSpeed} km/h in a ${speedLimit} zone`)
            return
        }
        else if(driverSpeed - speedLimit <= 20){
            status = 'speeding'
            difference = Math.abs(speedLimit - driverSpeed)
        }
        else if(20 < driverSpeed - speedLimit &&  driverSpeed - speedLimit <= 40){
            status = 'excessive speeding'
            difference = Math.abs(speedLimit - driverSpeed)
        }
        else{
            status = 'reckless driving'
            difference = Math.abs(speedLimit - driverSpeed)
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }
    printMessage(driverSpeed, speedLimit)
}
lookAfterSpeedLimits(40, 'city')
lookAfterSpeedLimits(21, 'residential')
lookAfterSpeedLimits(120, 'interstate')
lookAfterSpeedLimits(200, 'motorway')