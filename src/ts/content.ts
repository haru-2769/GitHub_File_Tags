import "../css/tag.css";

const HIGHLIGHT_CLASS = "git-filename-highlight";

function applyColorChange() {
  const fileLinks = document.querySelectorAll(
    'a[href*="/blob/"], a[href*="/tree/"]'
  );

  if (fileLinks.length > 0) {
    fileLinks.forEach((linkElement) => {
      if (linkElement instanceof HTMLElement) {
        linkElement.classList.add(HIGHLIGHT_CLASS);
      }
    });
  } else {
    console.warn(
      "Content Script: File links not found. (The selector was generic, please check if a file list is present.)"
    );
  }
}

window.addEventListener("load", applyColorChange);
