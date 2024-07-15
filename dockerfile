# Use uma imagem base oficial do Python
FROM python:3.10-slim

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos requirements.txt para o container
COPY requirements.txt .

# Instala as dependências do Python
RUN pip install --no-cache-dir -r requirements.txt

# Copia todo o conteúdo do projeto para o diretório de trabalho no container
COPY . .

# Expõe a porta que a aplicação irá rodar
EXPOSE 8000

# Define o comando padrão para executar quando o container iniciar
CMD ["./entrypoint.sh"]