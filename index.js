module.exports =
  this.requestAnimationFrame ||
  function (callback) {
    setTimeout(callback, 1000/60);
  }
;
