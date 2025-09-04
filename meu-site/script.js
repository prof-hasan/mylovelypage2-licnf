let currentPage = 0;
const pages = document.querySelectorAll(".menu-page");
const pageFlipSound = document.getElementById("pageSound"); 

function showPage(index) {
    if (index < 0 || index >= pages.length || index === currentPage) return;

    const current = pages[currentPage];
    const next = pages[index];

    // toca som de virar página
    if (pageFlipSound) {
        pageFlipSound.currentTime = 0;
        pageFlipSound.play();
    }

    // aplica efeito de virar na página atual
    current.classList.add("flip");

    // ativa a próxima antes da anterior sumir
    setTimeout(() => {
        next.classList.add("active");
    }, 300);

    // depois remove a atual completamente
    setTimeout(() => {
        current.classList.remove("active", "flip");
        currentPage = index;
    }, 700);
}

// funções simples chamadas pelo HTML
function nextPage() {
    showPage(currentPage + 1);
}
function prevPage() {
    showPage(currentPage - 1);
}
function levantarTampa() {
    const tampa = document.getElementById("tampa");
    const fumaca = document.getElementById("fumaca");

    // Levanta a tampa
    tampa.style.transform = "translateY(-550px) rotate(-10deg)";

    // Mostra fumaça
    fumaca.style.opacity = "1";


}
function goToFirstPage() {
    showPage(0);
}