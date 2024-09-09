//   Season	Timeline
// Spring	Jan-Feb
// Summer	Mar-May
// Monsoon	Jun-Sep
// Autumn	Oct
// Winter	Nov-Dec

// Return the current season
function getSeason() {
  const month = new Date().getMonth() + 1
  if (month <= 2) return 'spring'
  if (month >= 3 && month <= 5) return 'summer'
  if (month >= 6 && month <= 9) return 'monsoon'
  if (month == 10) return 'autumn'
  return 'winter'
}

export default getSeason
