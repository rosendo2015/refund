//seleciona os elementos do formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");
const expenseList = document.querySelector("ul");

//Captura p evento de input
amount.oninput = () => {
  //usado REGEX para remover letras e mantendo números
  let value = amount.value.replace(/\D+/g, "");
  //transformar o valor em centavos
  value = Number(value) / 100;
  //atualiza o valor do input
  amount.value = formatCurrencyBRL(value);
};

function formatCurrencyBRL(value) {
  //Formata o valor para o real brasileiro
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  //retorna o valor formatado
  return value;
}

form.onsubmit = (event) => {
  event.preventDefault();

  //cria um objeto com os detalhes das despesas
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  };

  expenseAdd(newExpense);
};

function expenseAdd(newExpense) {
  try {
    //cria o elemento que será adicionado a lista
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense");
    //icone da categoria
    const expenseIcon = document.createElement("img");
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute("alt", newExpense.category_name);
    
    //Cria o container das informações da despesa
    const expenseInfo = document.createElement("div")
    expenseInfo.classList.add("expense-info")

    //criar o nome da despesa
    const expenseName = document.createElement("strong")
    expenseName.textContent = newExpense.expense

    //cria a cetegoria da despesa
    const expenseCategory = document.createElement("span")
    expenseCategory.textContent = newExpense.category_name

    //add o name e category no container de informações da despesa
    expenseInfo.append(expenseName, expenseCategory)

    //Add as informações no item
    expenseItem.append(expenseIcon, expenseInfo);
    //Add o item a lista
    expenseList.append(expenseItem);


  } catch (error) {
    alert("não foi possivel adicionar a despesa.");
    console.log(error);
  }
}
