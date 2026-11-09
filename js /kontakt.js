const penzionInfo = {
    telefon: "+420 777 888 999",
    email: "info@penzionpavluvky.cz",
    adresa: "V údolí 18, Velké Pavlovice, 691 06",
    instagram: "https://instagram.com/penzionpavluvky"
};

// Funkce, která údaje automaticky vyplní do stránek, kde mají určitá ID
window.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('tel-text')) document.getElementById('tel-text').innerText = penzionInfo.telefon;
    if(document.getElementById('tel-link')) document.getElementById('tel-link').href = "tel:" + penzionInfo.telefon;
    
    if(document.getElementById('email-text')) document.getElementById('email-text').innerText = penzionInfo.email;
    if(document.getElementById('email-link')) document.getElementById('email-link').href = "mailto:" + penzionInfo.email;
    
    if(document.getElementById('adresa-text')) document.getElementById('adresa-text').innerText = penzionInfo.adresa;
});
