//seleciona os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount");
const expense = document.getElementById("expense")
const category = document.getElementById("category")

//Captura p evento de input
amount.oninput = () =>{
    //usado REGEX para remover letras e mantendo números
    let value = amount.value.replace(/\D+/g, "")
    //transformar o valor em centavos
    value = Number(value) / 100;    
    //atualiza o valor do input
    amount.value = formatCurrencyBRL(value);    
}

function formatCurrencyBRL(value){
    //Formata o valor para o real brasileiro
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
    //retorna o valor formatado
    return value;
}

form.onsubmit=(event)=>{
    event.preventDefault();

    //cria um objeto com os detalhes das despesas
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }

    expenseAdd(newExpense);
    
}

function expenseAdd(newExpense){
    try {
        
    } catch (error) {
        alert("não foi possivel adicionar a despesa.")
        console.log(error) 
    }
}