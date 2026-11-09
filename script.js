const config = {
  ateliers: [
    { id: 1, titre: "Créer une affiche avec Figma", places: 8 },
    { id: 2, titre: "Découvrir les raccourcis VS Code", places: 0 },
    { id: 3, titre: "Construire un quiz en JavaScript", places: 5 },
    { id: 4, titre: "Créer une page responsive avec Tailwind CSS", places: 12 },
    { id: 6, titre: "Animer une interface avec CSS", places: 0 },
  ],
  modes: {
    presentiel: "En présentiel",
    distance: "À distance",
  },
  campus: ["Youssoufia", "Asfi", "Nador"],
};

const selectedConfig = {
  atelierId: null,
  mode: "",
  campus: "",
  email: "",
};


const liste_ateliers = document.getElementById("liste-ateliers");
const liste_modes = document.getElementById("liste-modes");
const liste_campus = document.getElementById("liste-campus");

function afficher() {
  config.ateliers.forEach((atelier) => {
    if (atelier.places !== 0) {
      const label = document.createElement("label");
      label.className = "carte-choix";
      const input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("name", "atelier");
      input.setAttribute("aria-describedby", "erreur-atelier");
      const span = document.createElement("span");
      const strong = document.createElement("strong");
      strong.className = "atelier-titre";
      strong.textContent = atelier.titre;
      const span_places = document.createElement("span");
      span_places.className = "atelier-places detail";
      span_places.textContent = atelier.places
      span.append(strong, span_places);

      label.append(input, span);
      liste_ateliers.append(label);
    }
  })



  for (i = 0; i < config.modes.length; i++) {
    const carte_choix = document.createElement("label");
    carte_choix.className = "carte-choix";
    const input_mode = document.createElement("input");
    input_mode.setAttribute("type", "redio");
    input_mode.setAttribute("name", "mode");
    input_mode.setAttribute("aria-describedby", "erreur-mode");
    const span_mode = document.createElement("span");
    span_mode.className = "mode-libelle";
    span_mode.textContent = config.modes[i]
    carte_choix.append(input_mode, span_mode);
  }


const label_choix_campus = document.createElement("label");
label_choix_campus.className = "carte-choix";
const input_campus = document.createElement("input");
input_campus.setAttribute("type" , "radio");
input_campus.setAttribute("name" , "campus");
input_campus.setAttribute("aria-describedby" , "erreur-campus");
const span_cmapus = document.createElement("span");
span_cmapus.className = "campus-libelle";


}




afficher();
