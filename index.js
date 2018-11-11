
class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear()
  }
}

const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue',
'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {

  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    const vertBlocks = this.endingLocation.vertical - this.beginningLocation.vertical
    const horizBlocks = eastWest.findIndex(element => element === this.endingLocation.horizontal) - eastWest.findIndex(element => element === this.beginningLocation.horizontal)
    return vertBlocks + horizBlocks
  }

  estimatedTime(peakHours){
    if (peakHours) {
      return this.blocksTravelled() / 2
    }
    else {
      return this.blocksTravelled() / 3
    }
  }
}
