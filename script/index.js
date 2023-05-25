let botao1 = document.querySelector(".stack1")
let botao2 = document.querySelector(".stack2")
let botao3 = document.querySelector(".stack3")
let stack1 = document.querySelector("#stack1")
let stack2 = document.querySelector("#stack2")
let stack3 = document.querySelector("#stack3")


botao1.addEventListener("click", function(){
    stack2.classList.add("stack-invisivel")
    stack3.classList.add("stack-invisivel")
    stack1.classList.remove("stack-invisivel")
    toggleAtivacao(botao1);
})


botao2.addEventListener("click", function(){
    stack1.classList.add("stack-invisivel")
    stack3.classList.add("stack-invisivel")
    stack2.classList.remove("stack-invisivel")
    toggleAtivacao(botao2);
})

botao3.addEventListener("click", function(){
    stack1.classList.add("stack-invisivel")
    stack2.classList.add("stack-invisivel")
    stack3.classList.remove("stack-invisivel")
    toggleAtivacao(botao3);
})

function toggleAtivacao(botao){
    if(! botao.classList.contains("opcao-ativa")){
        const allElements = document.querySelectorAll(".opcao-stack")
        allElements.forEach((element)=>{
            element.classList.remove("opcao-ativa")
        })
        botao.classList.add("opcao-ativa")
    }
}
