# Imagem com o node:15
FROM node:15

# Setar e posicionar no diretório app
WORKDIR /usr/src/app

# Copiar os arquivos da aplicação da máquina local
# para o diretório app. Neste momento, não existe
# mais mapeamento do diretório local para o diretório
# dentro do container.
# Copia tudo do diretório onde se encotra o Dockerfile
# para o diretório app setado no comando anterior.
COPY . .

# Instala o mysql client.
RUN npm install mysql --save

# Instala o express.
RUN npm install express --save

# Instalar o curl para utilizar no Healthcheck do servidor
# node.
RUN apt-get update -yq
RUN apt-get -yq install curl gnupg

# Instalar o dockerize para que o container do node espere
# o container do banco de dados subir primeiro.
# RUN apt-get update && apt-get install -y wget
# ENV DOCKERIZE_VERSION v0.6.1
# RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#     && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#     && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Expõe a porta para outras aplicações
EXPOSE 3000

# Roda a aplicação index.js. Utilizamos CMD, pois se
# houver a necessidade, este comando pode ser sobrescrito
# pelo parâmetro externo.
CMD ["node", "index.js"]
