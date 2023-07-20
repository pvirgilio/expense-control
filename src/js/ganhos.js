let btnGanhos = document.getElementById("addGanhos");
let cardGanhos = document.getElementById("cardGanhos");

function registroGanho() {
  btnGanhos.addEventListener("click", () => {
    cardGanhos.innerHTML = `
    <div id="overlay" class="fixed left-0 top-0 z-50 h-full w-full bg-black bg-opacity-50"></div>
    <div id="window" class="fixed left-1/2 top-1/2 z-50 h-[360px] w-[500px] -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-10">
      <div class="flex justify-between gap-20">
        <h2 class="text-[1.6rem] font-semibold text-green-700">Novo Ganho</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-6 w-6 cursor-pointer" id="closeButton">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    
      <div class="mt-5 flex flex-col gap-5">
        <input class="w-full border border-gray-300 p-2" type="text" name="local_produto" id="" placeholder="Digite o local do ganho" />
        <div class="flex gap-2">
          <input class="w-1/2 border border-gray-300 p-2" type="number" step="0.01" name="valor_produto" id="" placeholder="Digite o valor" />
          <input class="w-1/2 border border-gray-300 p-2" type="text" name="nome_produto" id="" placeholder="Digite o nome do Produto" />
        </div>
    
        <div class="flex items-center justify-between">
          <div class="flex w-full items-center gap-2 justify-center">
            <label class="">Quantidade</label>
            <input class="w-1/2 border border-gray-300" type="number" name="qtd_produto" id="" />
          </div>
          <div class="flex w-full items-center gap-2 justify-center">
            <label class="" for="">Data</label>
            <input class="rounded-full border border-gray-300 p-1" type="date" name="data_produto" id="" />
          </div>
        </div>
    
        <button id="concluirGanho" class="mt-3 bg-green-700 p-2 text-center text-white" href="">Adicionar gasto</button>
      </div>
    </div>
    
        `;

    const valorProduto = document.querySelector("input[name=valor_produto]");
    const localProduto = document.querySelector("input[name=local_produto]");
    const nomeProduto = document.querySelector("input[name=nome_produto]");
    const resultGanho = document.querySelector("#concluirGanho");
    resultGanho.addEventListener("click", () => {
      ganhosGastos.innerHTML += `
        <div
              class="flex items-center mt-2 px-5 py-2 justify-between border-b border-gray-400"
            >
              <div class="">
                <h3 class="font-semibold text-[1.3rem]">${nomeProduto.value}</h3>
                <span class="font-semibold text-gray-500">R$ ${valorProduto.value}</span>
              </div>

              <div class="flex items-center gap-2">
                <h2 class="font-semibold text-[1.5rem] text-green-700">Ganhos</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-700">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
</svg>

              </div>

              <div class="">${localProduto.value}</div>
            </div>
        
        `;
      localProduto.value = "";
      valorProduto.value = "";
      nomeProduto.value = "";
    });
  });

  document.addEventListener("click", (event) => {
    let closeButton = event.target.closest("#closeButton");
    if (closeButton) {
      cardGanhos.innerHTML = "";
    }
  });
}

registroGanho();
