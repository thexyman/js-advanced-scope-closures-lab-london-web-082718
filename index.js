function produceDrivingRange(numOfBlocks) {
    return function(one, two) {
        let start = parseInt(one)
        let end = parseInt(two)
        let distanceToTravel = Math.abs(start - end)
        let difference = numOfBlocks - distanceToTravel 

        if (difference > 0) {
            return `within range by ${difference}`
        } else {
            return `${Math.abs(difference)} blocks out of range`
        }
    }
}

function produceTipCalculator(tipVal) {
    return function(tipAmount) {
        return tipAmount * tipVal
    }
}

function createDriver() {
    let driverID = 0
    return class {
        constructor(name) {
            this.id = ++driverID
            this.name = name 
        }
    }
}