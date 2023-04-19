const baseSize = 10;
function setRem() {
  let designSize = 1440;
  let html = document.documentElement;
  let clientW = html.clientWidth;
  let htmlRem = (clientW * baseSize) / designSize;
  html.style.fontSize = htmlRem + "px";
}
setRem();
window.onresize = function () {
  setRem();
};
