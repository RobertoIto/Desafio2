FROM nginx:1.15.0-alpine

# Apaga o arquivo de configuração padrão do nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia o nosso arquivo de configuração para o 
# diretório de configuração do nginx.
COPY nginx.conf /etc/nginx/conf.d

