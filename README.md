## <p align="center">Robô de Notícias de Tecnologia 🤖</p>

### <div align="center">Bem-vindo ao Robô de Notícias de Tecnologia!</div>
##### <div align="center">Este é um robô do Discord que usa a API do GNews para pesquisar notícias de tecnologia e as envia para um canal especificado. 📰</div>


### Recursos 🔍
- Pesquisa artigos de notícias sobre tecnologia utilizando a API do GNews;
- Envia artigos de notícias para um canal específico do Discord;
- Utiliza um prefixo (!) para acionar o comando
- Apaga o mensagem de comando após enviar as notícias

### Començando 🚀
Para usar o robô, siga estas etapas:

1. Instale as dependências executando
```bash
npm install discord.js axios dotenv
```
no seu terminal.

2. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
```bash
BOT_TOKEN=SEU_BOT_TOKEN
GNEWS_API_KEY=SEU_GNEWS_API_KEY
TARGET_CHANNEL_ID=SEU_TARGET_CHANNEL_ID
```

### Configuração 🛠️
Você pode configurar o robô editando o arquivo `bot.js`. Você pode alterar os seguintes valores:
- PREFIX: O prefixo utilizado para acionar o comando (padrão é !)
- BOT_TOKEN: O token de bot do portal do Desenvolvedor do Discord
- GNEWS_API_KEY: A chave de API do GNews
- TARGET_CHANNEL_ID: O ID do canal donde você deseja enviar as notícias
- GNEWS_API_URL: A URL da API do GNews (padrão é `https://gnews.io/api/v4/search`)

Substitua "SEU_BOT_TOKEN", "SEU_GNEWS_API_KEY" e "SEU_TARGET_CHANNEL_ID" pelos valores adequados para o seu robô.

3. Execute `node bot.js` para iniciar o robô no terminal
### Comando 💬
O comando para acionar o robô é `!nf`. Isso pesquisará notícias de tecnologia e as enviará para o canal especificado.

### Contribuir 🎉
As contribuições são bem-vindas! Se você gostaria de contribuir para o desenvolvimento deste robô, por favor faça um fork do repositório e suba una solicitação de pull com suas alterações.

### ❤️ Apoio, suporte.

Se por acaso você adora este projeto, deixe uma estrela no repo. Isso vai me manter motivado. Deixe-me saber sua opinião com a resposta. Clique [Diego Melo](https://tifodao.com/#contact).

<div align="center">
<a href="https://links.tifodao.com">
 <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/66981750/262346028-b6bf186e-5554-4736-a192-956402c5b0db.jpg" width="15%" height="15%">
</a>
<br/>

[![WebSite](https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://links.tifodao.com)
</div>

<div align="center">
Desenvolvido com ❤️ no Brasil 🌟 <br/>

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com/)
</div>

### Licença 📝
Este projeto é licenciado sob a Licença MIT.

```
MIT License

Copyright (c) [2023] [Diego Melo]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
