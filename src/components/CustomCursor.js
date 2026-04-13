// src/components/CustomCursor.js

export function initCursor() {
  // On cible la div qui sert de curseur (définie dans les layouts)
  const cur = document.getElementById('cur') || document.querySelector('.cur') || document.querySelector('.cursor');
  if (!cur) return;

  // 1. Suivi de la souris
  document.addEventListener('mousemove', (e) => {
    cur.style.left = e.clientX + 'px';
    cur.style.top = e.clientY + 'px';
  });

  // 2. Liste de tous les sélecteurs interactifs de tes différentes fiches
  const hoverSelectors = [
    'a', 'button', 
    '.glos-item', '.author-card', '.q-item', '.theme-block', 
    '.net-card', '.h-box', '.hc-card', '.concept-card', 
    '.acc-head', '.gi', '.qi', '.sc', '.qopt', '.opt'
  ].join(', ');

  const hoverElements = document.querySelectorAll(hoverSelectors);

  // 3. Ajout/Retrait de la classe d'agrandissement au survol
  hoverElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cur.classList.add('big');
      cur.classList.add('expand'); // Pour la compatibilité avec Dardot/Laval
    });
    el.addEventListener('mouseleave', () => {
      cur.classList.remove('big');
      cur.classList.remove('expand');
    });
  });
}