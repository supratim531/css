let main = document.getElementsByTagName("main")[0];

let screenSize = {
  xs: { min: 0, max: 575, type: "Extra Small" },
  sm: { min: 576, max: 767, type: "Small" },
  md: { min: 768, max: 991, type: "Medium" },
  lg: { min: 992, max: 1199, type: "Large" },
  xl: { min: 1200, max: 1399, type: "Extra Large" },
  "2xl": { min: 1400, max: 1e4, type: "Extra Extra Large" },
};

const renderMainContent = () => {
  let minRange = NaN;
  let screenType = "";
  const currentWidth = window.innerWidth;

  for (let key in screenSize) {
    if (currentWidth <= screenSize[key].max) {
      minRange = screenSize[key].min;
      screenType = screenSize[key].type;
      break;
    }
  }

  main.innerHTML = `<h2>${minRange}px (base) - ${currentWidth}px (current) - (${screenType})</h2>`;
};

renderMainContent();

window.addEventListener("resize", () => {
  renderMainContent();
});
