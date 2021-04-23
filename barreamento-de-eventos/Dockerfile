#comentários são feitos com #
#desde que # seja o primeiro símbolo na linha
#essa linguagem não é case sensitive
#mas é boa prática usar maiúsculas para diferenciar comandos de argumentos

#queremos uma imagem com o node versão 14
FROM node:14-alpine

# um diretório no sistema de arquivos do contêiner para os comandos a seguir

WORKDIR /app

#copiamos o package.json para poder executar npm install
COPY package.json .

#executamos npm install

RUN npm install

#copiamos os demais arquivos
COPY . .

#colocamos o aplicativo em execução
CMD ["npm", "start"]