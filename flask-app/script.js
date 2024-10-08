function searchFunction() {
    // Récupérer la valeur entrée par l'utilisateur
    let input = document.getElementById('searchBar').value.toUpperCase();
    
    // Récupérer tous les éléments de la liste
    let items = document.getElementById('itemList').getElementsByTagName('li');

    // Parcourir les éléments de la liste et les afficher ou cacher selon la recherche
    for (let i = 0; i < items.length; i++) {
        let item = items[i].textContent || items[i].innerText;
        
        if (item.toUpperCase().indexOf(input) > -1) {
            items[i].style.display = "";  // Afficher l'élément
        } else {
            items[i].style.display = "none";  // Cacher l'élément
        }
    }
}
