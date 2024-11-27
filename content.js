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

const mainNav = "#wrapper > header > div.quickLinks";
const mainID = "custom_nav_bau";

function mainNavC() {
  const nav = document.querySelector(mainNav);
  if (!nav) {
    return console.error("Main navigation not enhanced.");
  }
  if (!nav.querySelector(`#${mainID}`)) {
    const custom = document.createElement("div");
    custom.id = mainID;
    nav.prepend(custom);
  }
}

const observer = new MutationObserver(() => mainNavC());
const target = document.body;
if (target) {
  observer.observe(target, { childList: true, subtree: true });
} else {
  console.error("Failed to start observer: body not found.");
}
