import '../css/tag.css';
import { observe } from 'selector-observer';

function processCommitLink(commitLinkEl: HTMLElement): void {
  const rowElement = commitLinkEl.closest('tr.react-directory-row');
  if (!rowElement) {
    return;
  }

  const filenameLink = rowElement.querySelector<HTMLAnchorElement>(
    'td.react-directory-row-name-cell-large-screen a',
  );

  if (!filenameLink || !filenameLink.textContent?.trim().endsWith('.md')) {
    return;
  }

  const commitCell = rowElement.querySelector<HTMLTableCellElement>(
    'td.react-directory-row-commit-cell',
  );

  if (!commitCell) {
    return;
  }

  commitCell.innerHTML = '';
  const docsTag = document.createElement('span');
  docsTag.className = 'docs-tag';
  docsTag.textContent = 'docs';
  commitCell.appendChild(docsTag);
}

observe(
  'td.react-directory-row-commit-cell .react-directory-commit-message a',
  {
    add(commitLinkEl) {
      processCommitLink(commitLinkEl as HTMLElement);
    },
  },
);
