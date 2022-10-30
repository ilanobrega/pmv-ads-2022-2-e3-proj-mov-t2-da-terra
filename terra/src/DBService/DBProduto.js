import Database from "./DBService";

const DB_EXEC = Database.getConnection();

// Renderiza todos produtos cadastrados do produtor (Tela Loja) 
// TESTE GET OK
export const getProdutos = async () => {
  let results = await DB_EXEC("SELECT * FROM Produtos ORDER BY nome ASC");

  return results.rows._array;
};

// Get para uso na barra de busca
export const getSearchProduto = async (nome) => {
  let results = await DB_EXEC("SELECT * FROM Produtos WHERE nome LIKE ?;",     [nome]);
  //console.log(id)

  return results.rows._array;
};

// Get para uso na tela de compras
export const getProdutosCompras = async (id) => {
  let results = await DB_EXEC("SELECT * FROM Produtos WHERE id=?;", [id]);

  return results.rows._array;
};


// CRIAR A QUERY PARA RELACIONAR O PRODUTO COM O USUÁRIO
// export const getProdutosCompras = async (id) => {
//   let results = await DB_EXEC("SELECT * FROM Produtos WHERE id=?;", [id]);

//   return results.rows._array;
// };

// TESTE INSERT OK
export const insertProduto = async (produto) => {
  let results = await DB_EXEC(
    "INSERT INTO Produtos" +
    "(nome, preco, embalagem, estoque," +
    "categoria, descricao) VALUES(?,?,?,?,?,?);",
    [
      produto.nome,
      produto.preco,
      produto.embalagem,
      produto.estoque,
      produto.categoria,
      produto.descricao,
    ]
  );
  // console.log(results); //TESTE OK
  return results.rowsAffected;
};

// TESTE UPDATE OK
export const updateProduto = async (produto) => {
  let results = await DB_EXEC(
    'UPDATE Produtos SET ' +
    'nome=?, preco=?, embalagem=?, ' +
    'estoque=?, categoria=?, descricao=? ' +
    'WHERE id=?;',
    [
      produto.nome,
      produto.preco,
      produto.embalagem,
      produto.estoque,
      produto.categoria,
      produto.descricao,
      produto.id,
    ]
  );
  return results.rowsAffected;
}

// TESTE EXCLUIR OK
export const deleteProduto = async (id) => {
  let results = await DB_EXEC('DELETE FROM Produtos WHERE id=?;', [id]);

  return results.rowsAffected;
}
