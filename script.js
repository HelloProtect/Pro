const container = document.getElementById('visualisation');
const sortSelect = document.getElementById('sort');

function renderData(items) {
  container.innerHTML = '';
  const maxValue = Math.max(...items.map(i => i.value));

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <h2>${item.title}</h2>
      <p><strong>Description:</strong> ${item.description}</p>
      <p><strong>Catégorie:</strong> ${item.category}</p>
      <p><strong>Date:</strong> ${item.date}</p>
      <p><strong>Status:</strong> ${item.status}</p>
      <p><strong>Notes:</strong> ${item.notes}</p>
      <strong>Valeur: ${item.value}</strong>
      <div class="bar" style="width: ${Math.round((item.value/maxValue)*100)}%"></div>
    `;
    container.appendChild(card);
  });
}

// Tri
function sortData(criteria) {
  const sorted = [...data];
  if(criteria === 'title') {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  } else if(criteria === 'value') {
    sorted.sort((a, b) => b.value - a.value);
  }
  renderData(sorted);
}

renderData(data);

sortSelect.addEventListener('change', (e) => {
  sortData(e.target.value);
});
