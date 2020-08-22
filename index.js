var hamburguer = document.querySelector(".hamburguer");
/* Quando Acontecer o evento de click vai exercutar a função */
hamburguer.addEventListener("click", function(){
    /* Vai pegar o elemnto sidebar, apatir da lista de classes vai fazer uma alteração (add ou remove) */
    /* Se tiver a class show-menu ele tira, se não ele mostra  */
    console.log("show-menu")
    document.querySelector(".container").classList.toggle("show-menu");
})
console.log("ola")