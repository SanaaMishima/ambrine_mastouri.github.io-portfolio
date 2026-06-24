// Affiche une section et masque toutes les autres
function showSection(id) {
  document.querySelectorAll('.content-section').forEach(function(s) {
    s.classList.add('hidden');
  });
  var target = document.getElementById(id);
  if (target) target.classList.remove('hidden');
  // Désactive tous les boutons actifs de la sidebar
  document.querySelectorAll('.project-btn').forEach(function(b) {
    b.classList.remove('active');
  });
}

// Gère l'état actif des boutons de la sidebar
function setActiveBtn(btn) {
  document.querySelectorAll('.project-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  if (btn) btn.classList.add('active');
}

// Navigue vers la page À propos
function showAbout(btn) {
  showSection('content-about');
  setActiveBtn(btn);
}

// Navigue vers un projet
function showProject(id, btn) {
  showSection('content-' + id);
  setActiveBtn(btn);
}

// Ouvre / ferme un groupe de la sidebar
function toggleGroup(btn) {
  var chevron = btn.querySelector('.chevron');
  var content = btn.nextElementSibling;
  var isOpen = content.style.maxHeight !== '0px';

  if (isOpen) {
    content.style.maxHeight = '0px';
    chevron.classList.remove('open');
  } else {
    content.style.maxHeight = '200px';
    chevron.classList.add('open');
  }
}