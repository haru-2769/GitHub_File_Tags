import "../css/tag.css";
import { observe } from "selector-observer";

const HIGHLIGHT_CLASS = "git-filename-highlight";

function applyColorChange(linkElement: HTMLElement) {
  linkElement.classList.add(HIGHLIGHT_CLASS);
}

observe('a[href*="/blob/"], a[href*="/tree/"]', {
  add(linkElement) {
    applyColorChange(linkElement as HTMLElement);
  },
});
