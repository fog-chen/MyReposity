// window.onload = function () {
var oMain = document.getElementsByClassName('main')[0];
var oGo = document.getElementsByClassName('go')[0];
var color = ['blue', 'green', 'red', 'yellow'];
var timer, speed = 5, num = 0, flag = true;

// 创建行和列
function cDiv () {
  var oDiv = document.createElement('div');
  oDiv.setAttribute('class', 'row');
  var index = Math.floor(Math.random() * 4);
  for (var j = 0; j < 4; j++) {
    var iDiv = document.createElement('div');
    oDiv.appendChild(iDiv);
  }
  // console.log(this.iDiv);
  // console.log(this.oDiv);
  if (oMain.childNodes.length == 0) {
    oMain.appendChild(oDiv);
  } else {
    oMain.insertBefore(oDiv, oMain.childNodes[0]);
  };
  var clickDiv = oMain.childNodes[0].childNodes[index];
  clickDiv.setAttribute('class', 'i');
  clickDiv.style.backgroundColor = color[index];
}

function move () {
  clearInterval(timer);
  timer = setInterval(function () {
    var step = parseInt(oMain.offsetTop) + speed;
    // var step = oMain.offsetTop;
    oMain.style.top = step + 'px';
    console.log(oMain.offsetTop)

    // if (parseInt(oMain.offsetTop >= 0)) {
    cDiv();
    //   oMain.style.top = '-70px';
    // }
    var len = oMain.childNodes.length;
    console.log(len)
    if (len == 6) {
      //判断游戏结束
      alert('1')
      for (var i = 0; i < 4; i++) {
        alert('2')
        if (oMain.childNodes[len - 1].childNodes[i].classList.contains('i')) {
          alert('3')
          clearInterval(timer);
          alert('得分：' + num);
        }
        alert('4')
      }
      oMain.removeChild(oMain.childNodes[len - 1]);
    }
  }, 200);
  bindEvent();
}

function bindEvent () {
  oMain.addEventListener('click', function (e) {
    if (flag) {
      var tar = e.target;
      if (tar.className == 'i') {
        tar.style.backgroundColor = '#bbb';
        tar.classList.remove('i');
        num++;
      } else {
        clearInterval(timer)
        alert('得分：' + num);
        flag = false;
      }

      if (mun % 10 == 0) {
        speed++;
      }
    }
  })
}

function clickStart () {
  oGo.addEventListener('click', function () {
    oGo.style.display = 'none';
    move();
  })
}
clickStart();
// }