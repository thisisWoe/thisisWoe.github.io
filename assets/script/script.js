
// Definisco la funzione per aprire la finestra modale nel caricamento
function openModal() {
    let myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {});
    myModal.show();
  }
//da togliere poi===============================
function redirectToPage(url) {
    setTimeout(() => {
      window.location.href = url;
    }, 2000);
  }
//==============================================  
const languageModal = document.getElementById('staticBackdrop');
const fadedEffect = document.getElementsByClassName('modal-backdrop');
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
    const bodyChildren = document.querySelectorAll("#body>div");
    bodyChildren.forEach(function(element) {
        element.remove();
    }); //distruggo ogni figlio di body
    //2 righe di prova
    let myBody = document.getElementById('body');
    myBody.classList.remove('modal-open');
    let myNewItemTest = document.querySelector('#body');
    createAndAppendSingleElement('h1','body', 'start', 'prova', 'h1');
    document.getElementById('prova').innerHTML = 'Ciao Mondo!';
    redirectToPage('index-ita.html')
    //DA TOGLIERE QUANDO FINISCO LA STRUTTURA DELLA PAGINA
    
      
});
englishButton.addEventListener('click', function () {
    languageModal.remove();
    const bodyChildren = document.querySelectorAll("#body>div");
    bodyChildren.forEach(function(element) {
        element.remove();
    }); //distruggo ogni figlio di body
    //2 righe di prova
    let myBody = document.getElementById('body');
    myBody.classList.remove('modal-open');
    let myNewItemTest = document.querySelector('#body');
    createAndAppendSingleElement('h1','body', 'start', 'prova', 'h1');
    document.getElementById('prova').innerHTML = 'Hello World!';
});