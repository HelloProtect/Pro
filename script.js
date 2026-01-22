const container = document.getElementById('visualisation');

function renderData(items) {
  container.innerHTML = '';
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h2>${item.title}</h2>
      <p>${item.description}</p>
      <strong>Valeur: ${item.value}</strong>
    `;
    container.appendChild(card);
  });
}

// Affichage initial
renderData(data);
