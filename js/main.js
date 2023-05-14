const containerSobreMim = document.querySelector(".container-sobre-mim__texto");
const textoResumido = document.querySelector(".sobre-mim__texto__resumido");
const textoCompleto = document.querySelector(".sobre-mim__texto__completo");
const seta = document.querySelector(".material-symbols-outlined");


seta.addEventListener("click", () => mostrarTextoCompleto());

function mostrarTextoCompleto() {

  if (textoCompleto.classList.contains('active')) {
    textoCompleto.classList.remove('active');
    textoResumido.style.display = "flex";
    seta.textContent = "keyboard_arrow_down";
  } else {
    textoCompleto.classList.add('active');
    textoResumido.style.display = "none"
    seta.textContent = "keyboard_arrow_up";
  }
}
