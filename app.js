
/*  para mostrar somente uma informação contida na variável,
usamos o índice [] . e o que queremos
exemplo : 
console.log(personagens [2] . fruta); *
esse comando retorna a fruta do personagem contido no indice 2
*/
/* section é a variavel q vai guardar o que buscarmos no nosso html atraves do id que foi setado no html e referenciado em .getElemantByid ( " id aqui") */
// Função chamada quando o botão de pesquisa é clicado
function pesquisa() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("mostreresultado");
  
  // Obtém o valor da barra de pesquisa e o converte para minúsculas
  let barraPesquisa = document.getElementById("barra-pesquisa").value.toLowerCase();

  // Verifica se a barra de pesquisa está vazia
  if (barraPesquisa === "") {
    // Se a barra de pesquisa estiver vazia, mostra uma mensagem padrão
    section.innerHTML = `
      <div class="mostreresultado" id="mostreresultado">
        <div class="easteregg" id="cp9">
          <h1>Vamos lá, pergunte-me sobre alguém!</h1>
          <img src="imagens/personagens/nada.jpg" alt="copo vazo">
        </div>
      </div>
    `;
    return; // Interrompe a execução da função se a pesquisa estiver vazia
  }

  // Verifica se a pesquisa corresponde a um caso especial
  if (barraPesquisa === "cp9") {
    // Se a pesquisa for "cp9", mostra um conteúdo especial
    section.innerHTML = `
      <div class="mostreresultado" id="mostreresultado">
        <div class="easteregg" id="cp9">
          <h1>Parece que alguém sabe mais do que deveria ...</h1>
          <img src="imagens/personagens/evento.png" alt="pombo hatori">
        </div>
      </div>
    `;
    return; // Interrompe a execução da função para não adicionar resultados normais
  }

  // Inicializa a variável para armazenar os resultados da pesquisa
  let resultados = "";

  // Percorre a lista de personagens
  for (let personagem of personagens) {
    // Obtém as propriedades do personagem e as converte para minúsculas
    let titulo = personagem.titulo.toLowerCase();
    let cargo = personagem.cargo.toLowerCase();
    let org = personagem.org.toLowerCase();
    let fruta = personagem.fruta.toLowerCase();

    // Verifica se algum dos atributos do personagem inclui o texto da barra de pesquisa
    if (
      titulo.includes(barraPesquisa) ||
      cargo.includes(barraPesquisa) ||
      org.includes(barraPesquisa) ||
      fruta.includes(barraPesquisa)
    ) {
      // Adiciona o HTML correspondente ao personagem encontrado
      resultados += `
        <div class="mostreresultado">
          <div class="conteudo">
            <h2><a href="#" target="_blank">${personagem.titulo}</a></h2>
            <p class="descricao-meta">${personagem.texto}</p>
            <p class="descricao-meta">
              <h4>Cargo: ${personagem.cargo}<br>
              Akuma no Mi: ${personagem.fruta}</h4>
              <h4>Organização: ${personagem.org}</h4><br>
              <a href="${personagem.link}">Veja mais aqui!</a>
            </p>
          </div>
          <div class="retrato">
            <img src="${personagem.imagem}" alt="Water Seven">
          </div>
        </div>
      `;
    }
  }
  
  // Atualiza o conteúdo da seção com os resultados ou uma mensagem de nenhum resultado encontrado
  section.innerHTML = resultados || "<h2>Ku Ku Ku, não conheço não!.</h2>";
}
