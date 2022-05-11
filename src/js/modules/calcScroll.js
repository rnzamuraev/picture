function calcScroll() {
  const div = document.createElement("div");
  div.style.width = "100%";
  div.style.height = "100px";
  div.style.overflowY = "scroll";
  div.style.visibility = "hidden";
  document.body.appendChild(div);

  // let scrollWidth = div.offsetWidth - div.clientWidth;

  let widthClient = div.clientWidth,
    widthOffset = div.offsetWidth,
    scrollWidth = widthOffset - widthClient;
  console.log(widthClient);
  console.log(widthOffset);

  div.remove();
  return scrollWidth;
}
export default calcScroll;
