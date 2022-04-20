window.onload = function() {

  var area = document.getElementsByClassName('nitro')[0];

  function callback(counter) {
    var div = document.getElementsByClassName('count')[0];

    div.innerText = counter.words + " words."
  }

  Countable.live(area, callback);
};
