let date = new Date();
//  conversion de la date en francais

// afficher la date en francais
document.getElementById('date').innerHTML = (date.toLocaleDateString('fr-FR',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}));

console.log(date.toLocaleDateString('fr-FR'));