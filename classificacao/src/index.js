const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const keyWord = "importante";

const funcoes = {
  ObservacaoCriada: (observacao) => {
    observacao.status = observacao.texto.includes(keyWord)
      ? "importante"
      : "comum";
    axios.post("http://localhost:10000/eventos", {
      tipo: "ObservacaoClassificada",
      dados: observacao,
    });
  },
};

app.post("/eventos", (req, res) => {
  try {
    funcoes[req.body.tipo](req.body.dados);
  } catch (error) {
    res.status(400).send({ msg: "Não foi poassivel criar a observação" });
  }
  res.status(200).send({ msg: "ok" });
});

app.listen(7000, () => console.log("Classificacao. Porta 7000"));
