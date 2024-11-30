# ATVV - WB

## Execução

Abra o CMD(Prompt de Comando) e clone o repositório em sua máquina usando o comando abaixo ou baixe o código que está na página do repositório:

``` bash
git clone https://github.com/Tico1606/ATV-V-WB.git
```

Obs: É necessário ter o Git na sua máquina.

### Para abrir o terminal no Visual Studio Code apertando as teclas:

Ctrl + J

Ou vá ao topo da tela do Visual Studio Code, clique em "Terminal" e clique em "New Terminal".

### Para executar o back end da aplicação:

Obs: É necessário estar com o MySQL rodando e criar um banco de dados chamado "atv" manualmente, se necessário execute "USE atv".

```bash
cd '.\back-end\'
```

```bash
npm install
```

```bash
npm start
```

Para criar as tabelas e os inserts execute os comando no workbench ou use uma extensão para isso, como database client.
Os codigos estão na pasta bd

### Para executar o front end, abra outro terminal e execute:

Para entrar na pasta do front-end:

```bash
cd '.\front-end\'
```

Depois execute:

```bash
npm install --force
```

```bash
npm start
```

### Caso queira encerrar a execução:

Pressione Ctrl + C no terminal para encerrar