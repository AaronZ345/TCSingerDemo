document.querySelectorAll('.citation-block').forEach((block) => {
  const button = block.querySelector('.citation-copy');
  const code = block.querySelector('pre code');
  const status = block.querySelector('.citation-status');

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(code.textContent.trim() + '\n');
      status.textContent = 'Copied.';
    } catch {
      status.textContent = 'Select and copy the BibTeX below.';
    }
  });
});
