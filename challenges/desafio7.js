// 7 - Retorne o nome e vendidos dos lanches que tenham sido vendidos com uma quantidade diferente de 50 e em que o campo tags não exista

db.produtos.find(
  { curtidas: { $ne: 50 }, tags: null },
  { _id: 0, nome: 1, vendidos: 1 }
);
