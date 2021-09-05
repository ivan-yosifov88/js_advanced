function calculateTimeOfWalk(steps, stride, speed){
    let speedInMetersForSecond = Number(speed) / 3.6
    let totalTimeInSeconds;
    let traveledDistanceForBrake = 500;
    let traveledDistance = Number(steps) * Number(stride);
    let breaksCount = Math.floor(traveledDistance / traveledDistanceForBrake);
    totalTimeInSeconds = Math.round(traveledDistance / speedInMetersForSecond) + (breaksCount * 60)
    let hours = Math.floor(totalTimeInSeconds / 3600)
    totalTimeInSeconds -= hours * 3600
    let minutes = Math.floor(totalTimeInSeconds / 60)
    totalTimeInSeconds -= minutes * 60
    let seconds = totalTimeInSeconds
    console.log(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`)
    

}
calculateTimeOfWalk(4000, 0.60, 5)
calculateTimeOfWalk(2564, 0.70, 5.5)