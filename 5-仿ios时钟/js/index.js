window.onload = function () {
  var oUl = document.getElementsByClassName('mun-box')[0];
  var oHou = document.getElementsByClassName('hou')[0];
  var oMin = document.getElementsByClassName('min')[0];
  var oSec = document.getElementsByClassName('sec')[0];


  function init () {
    var str = '';
    for (var i = 1; i <= 12; i++) {
      str += '<li  style="transform:rotate(' + i * 30 + 'deg)" class=num><span style="transform:rotate(' + i * -30 + 'deg)">' + i + '</span></li>'
      // console.log(str)
      oUl.innerHTML = str
    }
  }
  init();

  function time () {
    var newDate = new Date();
    var newHour = newDate.getHours();
    var newMin = newDate.getMinutes();
    var newSec = newDate.getSeconds();
    var newMiSec = newDate.getMilliseconds();



    var jSec = newSec + newMiSec / 1000;
    var ds = jSec * 6;
    oSec.style.transform = 'rotate(' + ds + 'deg)';

    var jMin = newMin + jSec / 60;
    var dm = jMin * 6;
    oMin.style.transform = 'rotate(' + dm + 'deg)';

    var jHou = newHour + jMin / 60;
    var dh = jHou * 30;
    oHou.style.transform = 'rotate(' + dh + 'deg)';
    setTimeout(time, 16.7)
  }
  time();
}