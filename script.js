document.getElementById('year').textContent = new Date().getFullYear();

const mega = document.querySelector('.mega');
const hint = document.querySelector('.hint');
const hintText = hint.textContent;

// Split into letters for the hover wave.
mega.innerHTML = [...mega.textContent]
  .map((c, i) => `<span style="--i:${i}" aria-hidden="true">${c}</span>`).join('');

// Shrink or grow the email so it spans the full width.
function fit() {
  const pad = parseFloat(getComputedStyle(mega).paddingLeft) * 2;
  mega.style.fontSize = '100px';
  const avail = mega.parentElement.clientWidth - pad;
  mega.style.fontSize = (100 * avail / (mega.scrollWidth - pad)) + 'px';
}
document.fonts.ready.then(fit);
addEventListener('resize', fit);
fit();

mega.addEventListener('click', () => {
  navigator.clipboard?.writeText('contact@bartoszpoletek.com').then(() => {
    hint.textContent = hint.dataset.copied;
    setTimeout(() => hint.textContent = hintText, 2500);
  }).catch(() => {});
});
