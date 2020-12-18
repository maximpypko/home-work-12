function memory() {
  let parametr = 0;
  return function (i) {
    return parametr += i;
  }
}

////////////////////////////////////////

function counter(value = 0, step = 10) {
  let start = value;

  return function (backToStart) {

    if (backToStart) {
      return start = value;
    } else {
      return start += step;  
    }
  }
}