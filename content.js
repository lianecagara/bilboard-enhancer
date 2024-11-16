window.onload = () => {
  console.log("Bilboard Enhancer Started!");
  const style = document.createElement("style");
  style.textContent = `
  * {
    user-select: text !important;
    -webkit-user-select: text !important;
    -ms-user-select: text !important;
    -moz-user-select: text !important;
    pointer-events: auto !important;
  }
`;
  document.head.appendChild(style);

  if (/*window.location.pathname === "/user_dashboard" */ true) {
    const mainPgCont = document.querySelector(
      ".catalog_boxes.dashboard_widgets.dashboard_widget_grid"
    );
    if (mainPgCont) {
      console.log("Applying main page credit");
      const str = `<div class="block full_width_widget banner_widget">
      <div class="headingLinkWrap">
        <h2>Better Experience</h2>
      </div>
      <div style="padding: 15px 15px 0;">
        <p>Download the Chrome Extension Here:</p>
        <a style="display: inline-block;" href="https://github.com/lianecagara/bilboard-enhancer">Github</a>
      </div>
    </div>`;
      mainPgCont.innerHTML = str + mainPgCont.innerHTML;
    }
  }
};

console.log("Bil Enhancer");
window._bilEnch = true;
