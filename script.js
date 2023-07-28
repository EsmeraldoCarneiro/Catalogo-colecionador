const carForm = document.getElementById('carForm');
const carList = document.getElementById('carList');

//Adiciona um evento de submit ao formulário para adicionar um carrinho
carForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const modelo = document.getElementById("modelo").value;
    const fabricante = document.getElementById("fabricante").value;
    const ano = document.getElementById("ano").value;
    const cor = document.getElementById("cor").value;

    const carrinho = {
        modelo,
        fabricante,
        ano,
        cor,
    };

    //Obtém a lista de carrinhos armazenada no Local Storage
    let carrinhos = JSON.parse(localStorage.getItem("carrinhos")) || [];

    //Adiciona o novo carrinho à lista
    carrinhos.push(carrinho);

    //Armazena a lista atualizada de carrinhos no local storage
    localStorage.setItem("carrinhos", JSON.stringify(carrinhos));

    //Atualiza a exibição da lista de carrinhos
    updateCarList();
});

//Função para atualizar a exibição da lista de carrinhos
function updateCarList() {
    carList.innerHTML = "";

    //Obtém a lista de carrinhos armazenada no Local Storage
    const carrinhos = JSON.parse(localStorage.getItem('carrinhos')) || [];

    //Cria elementos HTML para exibir cada carrinho
    carrinhos.forEach((carrinho) => {
        const carDiv = document.createElement("div");
        carDiv.classList.add("car-item");

        const carInfo = `
            <h3>${carrinho.modelo}</h3>
            <p>Fabricante: ${carrinho.fabricante}</p>
            <p>Ano: ${carrinho.ano}</p>
            <p>Cor: ${carrinho.cor}</p>
        `;

        carDiv.innerHTML = carInfo;
        carList.appendChild(carDiv);
    });
}

//Atualiza a exibição da lista de carrinhos ao carregar a página
updateCarList();