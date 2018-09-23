//modal
const botao = document.querySelector(".banner__botao");
botao.addEventListener("click", function(evento){
  evento.preventDefault();
  const modal = document.querySelector(".modal");
  modal.classList.add("modal--show");

})

const botoesFechar = document.querySelectorAll(".modal__btn-fechar");
for (let i = 0; i < botoesFechar.length; i++) {
  botoesFechar[i].addEventListener("click", function(evento){
    evento.preventDefault();
    const modal = document.querySelector(".modal");
    modal.classList.remove("modal--show");
  })
}
