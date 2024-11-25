class CustomElement extends HTMLElement {
  connectedCallback() {
    // Fonction pour récupérer les paramètres de l'URL
    function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }

    // Récupérer le GCLID
    const gclid = getQueryParam("gclid");

    // Construire l'URL Typeform avec les paramètres dynamiques
    const typeformUrl = `https://bsfios5dehr.typeform.com/to/cHzbgu76${gclid ? `?gclid=${gclid}` : ''}`;

    // Ajouter un iframe dynamiquement
    this.innerHTML = `
      <iframe
        style="width: 100%; height: 600px; border: none; border-radius: 10px;"
        src="${typeformUrl}"
        allow="microphone; camera">
      </iframe>
    `;
  }
}

// Déclarer l'élément personnalisé
customElements.define('custom-element', CustomElement);
