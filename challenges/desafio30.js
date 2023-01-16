db.produtos.find({ curtidas: { $gt: "$vendidos" } }, { nome: 1 });
