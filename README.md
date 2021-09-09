# Dev Chat 🤖
## Projeto de aprendizado ***Docker***, ***Typescript***, ***SocketIO*** e etc.

###### 🌴 ***OBS: Esse projeto não está totalmente finalizado e atualmente o seu desenvolvimento está pausado. Em breve, novas atualizações...*** 🌴

<br>
<p float="left">
 <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
 <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
 <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white">
 <img src="https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white">
 <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white">
 <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
</p>
<br>

## Ideia: 💡
Desenvolver um **chat** que permita a criação de grupos com o tema de **tecnologias de desenvolvimento**, onde será possível o gerenciamento dos grupos e o compartilhamento de informações

## Funcionalidades:
- Cadastro de usuário;
- Criação de grupos de chats;
- Convidar pessoas para participar do grupo;
- Subir imagens de anexo ao chat;
- Enviar mensagens;
- Enviar audio;
- Gerenciar permissões de grupo.

## Executando o projeto: 🚀
Para executar e visualizar o projeto em **modo de desenvolvimento**, você precisará seguir as próximas etapas.

### Pré-requisitos:
Abaixo estará listada as ferramentas necessárias para o funcionamento do projeto.
- **NodeJS versão 14** <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/nodejs.svg" height="20" /><br>
  [<ins>Guia de instalação NodeJS</ins>](https://nodejs.org/en/).
- **Docker** 🐳<br>
  [Guia de instalação docker](https://docs.docker.com/get-docker/).
- **Docker Compose** 🐳<br>
  [Guia de instalação docker compose](https://docs.docker.com/compose/install/).
  
### Começando:
As etapas abaixo são necessárias para o funcionamento do projeto na mesma ordem informada.

  1. Obtendo dependencias do **Frontend**: <br>
  Acesse a pasta ```/frontend``` e execute o comando abaixo para instalar as dependencias do projeto
   ```sh
   npm install
   ```
   ###### Comando para instalar as dependencias necessárioas

  2. Obtendo dependencias do **Backend**: <br>
  Acesse a pasta ```/backend``` e execute o comando abaixo para instalar as dependencias do projeto
   ```sh
   npm install
   ```
   ###### Comando para instalar as dependencias necessárioas
   
  3. Configurando o **.env**: <br>
  Na raiz do projeto, acesso o arquivo ```.env.example``` e copie o seu conteúdo. Em seguida, **na raiz** do projeto, crie um arquivo chamado ```.env``` e cole o conteúdo do ```.env.exemple``` para o ```.env```.
  Após o passo acima, altere os valores das variáveis de acordo com as configurações do seu ambiente de desenvolvimento.
  
  4. Executando os **containers**: <br>
  Ainda na **raiz do projeto**, execute o comando abaixo para buildar os containers configurados:
   ```sh
   docker-compose up --build
   ```
   ###### Comando para buildar os containers nas configurações informadas
   
  5. Gerando estrutura do **banco de dados**: <br>
  Com seus container em executação, execute o comando abaixo para **acessar o backend** em executação da nossa aplicação.
  ```sh
  docker exec -i -t server /bin/bash 
  ```
  ###### Comando para acessar o container do backend
  
  Após acessar o container, execute os comandos abaixo para gerar a estrutura do banco de dados:
  ```sh
  npm run migrate:run
  ```
  ###### Comando para gerar tabelas no banco de dados
  ```sh
  npm run seed:run
  ```
  ###### Comando para inserir dados estáticos nas tabelas configuradas
  
### Conclusão:
Após a execução dos passos acima, você terá o **banco de dados**, o **backend** e o **frontend** todos em executação em um **ambiente gerenciado pelo docker compose** e pronto para o desenvolvimento da aplicação 🚀

---
## Links: 🌐
***Documentações:***<br>
[<ins>TypeORM docs</ins>](https://typeorm.io/#/)

[<ins>Typescript docs</ins>](https://www.typescriptlang.org/)

[<ins>PosgresSQL docs</ins>](https://www.postgresql.org/)

[<ins>SocketIO docs</ins>](https://socket.io/)

---
## Licença
Este projeto está licenciado sob a licença [MIT] - consulte o arquivo LICENSE.md para obter detalhes
