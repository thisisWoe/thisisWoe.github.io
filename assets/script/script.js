
// Definisco la funzione per aprire la finestra modale nel caricamento
function openModal() {
    let myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {});
    myModal.show();
  }

const languageModal = document.getElementById('staticBackdrop');
const italianButton = document.getElementById('italian');
const englishButton = document.getElementById('english');









  // Aggiungo un ascoltatore per l'evento "load" della finestra
  window.addEventListener('load', function () {
    // Quando la finestra viene caricata, apro la finestra modale
    openModal();
  });


//distruggo la modale e creo la pagina
italianButton.addEventListener('click', function () {
    languageModal.remove();
    //2 righe di prova
    let myBody = document.getElementById('body');
    myBody.classList.remove('modal-open');
    let myNewItemTest = document.querySelector('#body');
    createAndAppendSingleElement('h1','body', 'start', 'prova', 'h1');
    document.getElementById('prova').innerHTML = 'Ciao Mondo!';
});
englishButton.addEventListener('click', function () {
    languageModal.remove();
    //2 righe di prova
    let myBody = document.getElementById('body');
    myBody.classList.remove('modal-open');
    let myNewItemTest = document.querySelector('#body');
    createAndAppendSingleElement('h1','body', 'start', 'prova', 'h1');
    document.getElementById('prova').innerHTML = 'Hello World!';
});