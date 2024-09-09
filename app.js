function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  //id para a função de pesquisar.
  let campoPesquisa = document.getElementById("campo-pesquisa").value
  if(campoPesquisa == "") {
    section.innerHTML = "Você precisa digitar algo para realizar a busca."
    return
  }
  
  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let descricao = "";

  // Itera sobre cada bairro na lista de bairros
  for (let dado of bairro) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    //se titulo includes campoPesquisa então faça...
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      // Constrói o HTML para cada item de resultado, formatando com template literals
      resultados += ` <div class="item-resultado">
       <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
      <p class="descricao-meta">${dado.descricao} </p>
      <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
      `;
    }
  }

  if(!resultados){
    resultados = "Esse bairro não foi localizado.";
  }
  // Atribui o HTML gerado para a seção de resultados
  section.innerHTML = resultados;
}


