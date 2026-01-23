// Récupération des éléments
const container = document.getElementById("visualisation");
const sortSelect = document.getElementById("sort");

// Fonction principale d'affichage
function renderData(items) {
  container.innerHTML = "";

  // Valeur max pour normaliser les barres
  const maxValue = Math.max(...items.map(item => item.value));

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    const barWidth = (item.value / maxValue) * 100;

    card.innerHTML = `
      <h2>${item.title}</h2>

      <p class="desc">${item.description}</p>

      <div class="info">
        <p><strong>Catégorie :</strong> ${item.category}</p>
        <p><strong>Statut :</strong> ${item.status}</p>
        <p><strong>Date :</strong> ${item.date}</p>
        <p><strong>Études :</strong> ${item.studies}</p>
        <p><strong>Salaire :</strong> ${item.salary}</p>
        <p><strong>Compétences :</strong> ${item.skills.join(", ")}</p>
        <p><strong>Avantages :</strong> ${item.pros}</p>
        <p><strong>Inconvénients :</strong> ${item.cons}</p>
      </div>

      <p class="notes"><strong>Notes :</strong> ${item.notes}</p>

      <div class="score">
        <span>Intérêt global : ${item.value}</span>
        <div class="bar-container">
          <div class="bar" style="width: ${barWidth}%"></div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Fonction de tri
function sortData(criteria) {
  const sorted = [...data];

  if (criteria === "title") {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  } 
  else if (criteria === "value") {
    sorted.sort((a, b) => b.value - a.value);
  }

  renderData(sorted);
}

// Écouteur sur le select de tri (si présent)
if (sortSelect) {
  sortSelect.addEventListener("change", (e) => {
    sortData(e.target.value);
  });
}

// Affichage initial
renderData(data);
