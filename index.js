class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf(year) {
        return (new Date(year).getFullYear() - new Date(this.startDate).getFullYear() + 1)

    }
}

class Route {
    constructor(beginningLocation, endLocation) {
        this.beginningLocation = beginningLocation;
        this.endLocation = endLocation;

        this.eastWest = [
          "1st Avenue",
          "2nd Avenue",
          "3rd Avenue",
          "Lexington Avenue",
          "Park",
          "Madison Avenue",
          "5th Avenue"
        ];
    }

    blocksTravelled() {
        // { horizontal: '1st Avenue', vertical: '34' },
        // { horizontal: 'Park', vertical: '34' }
        let verticalStart = this.beginningLocation["vertical"]
        let verticalEnd = this.endLocation["vertical"]
        let horizontalStart = this.eastWest.indexOf(this.beginningLocation["horizontal"])
        let horizontalEnd = this.eastWest.indexOf(this.endLocation["horizontal"])

        let vertical = Math.abs(verticalEnd - verticalStart)
        let horizontal = Math.abs(horizontalEnd - horizontalStart)
        // debugger;
        return (vertical + horizontal)
    }

    estimatedTime(peak=false) {
        let divisor = (peak ? 2 : 3)
        return this.blocksTravelled() / divisor

    }
}