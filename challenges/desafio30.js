db.produtos.updateMany({ nome: { $in: ["Big Mac"] } },
    {
        $unset: { curtidas: "" },
    });
    
db.produtos.find({}, { _id: 0, nome: 1, curtidas: 1 });