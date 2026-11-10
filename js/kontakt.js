const penzionInfo = {
    telefon: "+420 602 490 962",
    email: "info@penzionpavluvky.cz",
    adresa: "V údolí 18, Velké Pavlovice, 691 06",
    instagram: "https://instagram.com/penzionpavluvky"
};

function nactikontakty() {
    // Adresa
    const adresaEl = document.getElementById('adresa-text');
    if (adresaEl) adresaEl.innerText = penzionInfo.adresa;

    // Telefon
    const telTextEl = document.getElementById('tel-text');
    const telLinkEl = document.getElementById('tel-link');
    if (telTextEl) telTextEl.innerText = penzionInfo.telefon;
    if (telLinkEl) telLinkEl.href = "tel:" + penzionInfo.telefon.replace(/\s+/g, '');

    // E-mail
    const emailTextEl = document.getElementById('email-text');
    const emailLinkEl = document.getElementById('email-link');
    if (emailTextEl) emailTextEl.innerText = penzionInfo.email;
    if (emailLinkEl) emailLinkEl.href = "mailto:" + penzionInfo.email;
}

// Spustí se okamžitě bez čekání na událost
nactikontakty();
