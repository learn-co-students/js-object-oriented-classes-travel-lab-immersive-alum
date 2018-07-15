class Driver{
  constructor(name, dateString){
    this.name = name
    this.startDate = new Date(dateString)
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear()
  }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let verticalBlocks = Math.abs(parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical))
    let horizontalBlocks = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    return verticalBlocks + horizontalBlocks
  }

  estimatedTime(peakHours){
    let rate;
    if(peakHours){
      rate = 2
    }else{
      rate = 3
    }
    return this.blocksTravelled() / rate
  }
}
