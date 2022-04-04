//quando contador===3, ativa o botao de finalizar o pedido
let contador = 0;



// reminder: elemento é o que eu acabei de clicar. dishSelecionado é o que já está selecionado
function selecionaDish(elemento) {
    //procura algum dish selecionado
    let verificaSelecao = document.querySelector(".dishSelecionado");
    let checando = elemento.querySelector("ion-icon")

    //se tiver dish selecionado ele remove a selecao
    if (verificaSelecao !== null) {
        verificaSelecao.classList.remove("dishSelecionado");
        checando.classList.add("sumido")
        //se a selecao for num dish diferente do que ja estava selecionado, ele seleciona a nova dish
        if (verificaSelecao !== elemento) {
            verificaSelecao.querySelector("ion-icon").classList.add("sumido")
            checando.classList.remove("sumido");
            elemento.classList.add("dishSelecionado");
            
           
        }  else {
            if (contador===3) {
                contador = contador - 1
                let variavel = document.querySelector(".fechamento-escrita");
                variavel.classList.remove("fech-finaliza");
                variavel.innerHTML = "Selecione os 3 itens para fechar o pedido";
            } else {
                contador = contador - 1
            }
            
        }     
    } else {
        checando.classList.remove("sumido");
        elemento.classList.add("dishSelecionado");
        contador = contador + 1
    }
    if (contador===3) {
        let variavel = document.querySelector(".fechamento-escrita");
        variavel.classList.add("fech-finaliza");
        variavel.innerHTML = "Fechar pedido";
    }

    
}

function selecionaBeverage(elemento) {
    //procura algum dish selecionado
    let verificaSelecao = document.querySelector(".beverageSelecionado");
    let checando = elemento.querySelector("ion-icon")

    //se tiver dish selecionado ele remove a selecao
    if (verificaSelecao !== null) {
        verificaSelecao.classList.remove("beverageSelecionado");
        checando.classList.add("sumido")
        //se a selecao for num dish diferente do que ja estava selecionado, ele seleciona a nova dish
        if (verificaSelecao !== elemento) {
            verificaSelecao.querySelector("ion-icon").classList.add("sumido")
            checando.classList.remove("sumido");
            elemento.classList.add("beverageSelecionado");
           
        } else {
            if (contador===3) {
                contador = contador - 1
                let variavel = document.querySelector(".fechamento-escrita");
                variavel.classList.remove("fech-finaliza");
                variavel.innerHTML = "Selecione os 3 itens para fechar o pedido";
            } else{
                contador = contador - 1
            }
            
        }         
    } else {
        checando.classList.remove("sumido");
        elemento.classList.add("beverageSelecionado");
        contador = contador + 1
    }
    if (contador===3) {
        let variavel = document.querySelector(".fechamento-escrita");
        variavel.classList.add("fech-finaliza");
        variavel.innerHTML = "Fechar pedido";
    }
}

function selecionaDessert(elemento) {
    //procura algum dish selecionado
    let verificaSelecao = document.querySelector(".dessertSelecionado");
    let checando = elemento.querySelector("ion-icon")

    //se tiver dish selecionado ele remove a selecao
    if (verificaSelecao !== null) {
        verificaSelecao.classList.remove("dessertSelecionado");
        checando.classList.add("sumido")
        //se a selecao for num dish diferente do que ja estava selecionado, ele seleciona a nova dish
        if (verificaSelecao !== elemento) {
            verificaSelecao.querySelector("ion-icon").classList.add("sumido")
            checando.classList.remove("sumido");
            elemento.classList.add("dessertSelecionado");
           
        } else {
            if (contador===3) {
                contador = contador - 1
                let variavel = document.querySelector(".fechamento-escrita");
                variavel.classList.remove("fech-finaliza");
                variavel.innerHTML = "Selecione os 3 itens para fechar o pedido";
            } else{
                contador = contador - 1
            }
        }            
    } else {
        checando.classList.remove("sumido");
        elemento.classList.add("dessertSelecionado");
        contador = contador + 1
    }
    if (contador===3) {
        let variavel = document.querySelector(".fechamento-escrita");
        variavel.classList.add("fech-finaliza");
        variavel.innerHTML = "Fechar pedido";
    }
}


function finalizarPedido() {
    if (contador===3) {
        let variavel = document.querySelector(".tela-sobreposta")
        variavel.classList.remove("sumido")
    }
}

function tudoCerto() {
    let nomePrato = prato.querySelector(h1)
    let uri = `Olá, gostaria de fazer o pedido:\n
        - Prato: \n
        - Bebida: \n
        - Sobremesa: \n\n
        Total: R$`
   const uriencoded = encodeURIComponent(uri);
   window.open(`https://wa.me/5511975141875?text=$(uriencoded) `)
}

function botaoCancelar() {
    let variavel = document.querySelector(".tela-sobreposta")
    variavel.classList.add("sumido")
}