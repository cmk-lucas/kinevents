function sendWhatsApp() {
  const exp =
    document.querySelector('input[name="exp"]:checked')?.value || "Non précisé";

  const message = `
📋 NOUVELLE INSCRIPTION – KIN ÉVENTS

👤 Nom : ${nom.value}
🎂 Âge : ${age.value}
📏 Taille : ${taille.value} cm
⚖️ Poids : ${poids.value} kg
🏠 Commune : ${commune.value}
📱 WhatsApp : ${phone.value}
📸 Réseau : ${insta.value}

✨ Pourquoi Kin Évents :
${raison.value}

🎯 Objectifs :
${objectifs.value}

⚠️ Défaut :
${defaut.value}

🎭 Expérience :
${exp}
${experience.value}

📆 Disponibilité :
${dispo.value}

🤝 Attentes :
${attentes.value}
`;

  const phoneNumber = "243982927569"; // 👉 Numéro WhatsApp Kin Évents
  const url =
    "https://wa.me/" +
    phoneNumber +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}
