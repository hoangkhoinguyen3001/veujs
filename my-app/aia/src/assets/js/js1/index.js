module.exports = {
  headerScroll : (e) => {
    let scroll = e.currentTarget.scrollTop;
    let head = document.getElementsByTagName("header");
    const arrowTop = document.getElementsByClassName("scrolltop")[0];
    if (
      head.length > 0
    ) {
      if (scroll > 50) {
        head[0].className = "stick";
        if(arrowTop.className === "scrolltop") {
          arrowTop.className += " active";
        }
      } else {
        head[0].className = "";
        arrowTop.className = arrowTop.className.replace(" active", "");
      }
    }
  },
  popUpForm: (e, darkBg, form) => {
    const text = e.currentTarget.previousSibling.previousSibling.innerHTML;
    darkBg.className += " active";
    form.className += " active";
    form.children[0].innerHTML = text;
  }
}
