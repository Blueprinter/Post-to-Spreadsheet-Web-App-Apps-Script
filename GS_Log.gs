function ll(a,b) {
  if (typeof b === 'object') {
    b = JSON.stringify(b)
    
  }
  Logger.log(a + " : " + b)
}
