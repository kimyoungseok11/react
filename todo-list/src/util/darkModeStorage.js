export function getDarkMode() {
  let darkMode;
  if (localStorage.getItem("darkMode") === null) {
    localStorage.setItem("darkMode", JSON.stringify(false));
  }
  darkMode = JSON.parse(localStorage.getItem("darkMode"));

  return darkMode;
}

export function setDarkModeStorage(mode) {
  localStorage.removeItem("darkMode");
  localStorage.setItem("darkMode", JSON.stringify(mode));
}
