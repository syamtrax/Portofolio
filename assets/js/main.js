const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("theme", "light");
  } else {
    document.documentElement.setAttribute("theme", "dark");
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);
