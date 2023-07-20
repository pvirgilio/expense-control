let btnGastos = document.getElementById("btnGasto");
let cardGastos = document.getElementById("cardGastos");
const ganhosGastos = document.querySelector("#ganhos-gastos");
const saldoAtual = document.querySelector("#saldoAtual");
let saldo = 0;
saldoAtual.innerHTML = `0,00`;
let saldoGasto = 0;
let totalGasto = document.querySelector("#totalGasto");
totalGasto.innerHTML = `R$ 0,00`;

function registroGasto() {
  btnGastos.addEventListener("click", () => {
    cardGastos.innerHTML = `
    <div id="overlay" class="fixed left-0 top-0 z-50 h-full w-full bg-black bg-opacity-50"></div>
    <form id="window" class="fixed left-1/2 top-1/2 z-50 h-[360px] w-[500px] -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-10">
      <div class="flex justify-between gap-20">
        <h2 class="text-[1.6rem] font-semibold text-red-700">Novo Ganho</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-6 w-6 cursor-pointer" id="closeButton">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    
      <div class="mt-5 flex flex-col gap-5">
        <input class="w-full border border-gray-300 p-2" type="text" name="local_produto" id="" placeholder="Digite o local do gasto"  required/>
        <div class="flex gap-2">
          <input class="w-1/2 border border-gray-300 p-2" type="number" step="0.01" name="valor_produto" id="" placeholder="Digite o valor"  required/>
          <input class="w-1/2 border border-gray-300 p-2" type="text" name="nome_produto" id="" placeholder="Digite o nome do Produto" required />
        </div>
    
        <div class="flex items-center justify-between">
          <div class="flex w-full items-center gap-2 justify-center">
            <label class="">Quantidade</label>
            <input class="w-1/2 border border-gray-300" type="number" name="qtd_produto" id="" required/>
          </div>
          <div class="flex w-full items-center gap-2 justify-center">
            <label class="" for="">Data</label>
            <input class="rounded-full border border-gray-300 p-1" type="date" name="data_produto" id="" required />
          </div>
        </div>
    
        <button id="concluirGasto" class="mt-3 bg-red-700 p-2 text-center text-white" href="">Adicionar gasto</button>
      </div>
    </form>
    
        `;

    const valorProduto = document.querySelector("input[name=valor_produto]");
    const localProduto = document.querySelector("input[name=local_produto]");
    const nomeProduto = document.querySelector("input[name=nome_produto]");
    const dataProduto = document.querySelector("input[name=data_produto]");
    const qtdProduto = document.querySelector("input[name=qtd_produto]");

    const resultGasto = document.querySelector("#concluirGasto");
    resultGasto.addEventListener("click", () => {
      ganhosGastos.innerHTML += `
        <div
              class="flex items-center mt-2 px-5 py-2 justify-between border-b border-gray-400"
            >
              <div class="">
                <h3 class="font-semibold text-[1.3rem]">${nomeProduto.value}</h3>
                <span class="text-gray-500">R$ ${valorProduto.value}</span>
              </div>

              <div class="flex items-center gap-2 flex-col">
               <div class="flex items-center gap-2">
                  <h2 class="font-semibold text-[1.5rem] text-red-700">Gastos</h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-red-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
               </div>
                <div class="">
                    <span class="text-gray-400">Quantidade: ${qtdProduto.value}</span>
                </div>
              </div>

              <div class="flex flex-col">
              <span>${localProduto.value}</span>
              <span class="text-gray-500">${dataProduto.value}</span>
              </div>
            </div>
        
        `;
      saldo -= parseFloat(valorProduto.value) * qtdProduto.value;
      saldoAtual.innerHTML = saldo.toFixed(2);
      saldoGasto += parseFloat(valorProduto.value) * qtdProduto.value;
      totalGasto.innerHTML = `R$ ${saldoGasto.toFixed(2)}`;
      localProduto.value = "";
      valorProduto.value = "";
      nomeProduto.value = "";
      qtdProduto.value = "";
      dataProduto.value = "";
    });
  });

  document.addEventListener("click", (event) => {
    let closeButton = event.target.closest("#closeButton");
    if (closeButton) {
      cardGastos.innerHTML = "";
    }
  });
}

registroGasto();
