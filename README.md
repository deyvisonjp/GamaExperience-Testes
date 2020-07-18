# GAMA EXPERIENCE - TESTES

## AULA 1, 2 e 3 - INTRODUÇÃO 
- TDD (Test Driven Development): Desenvolvimento Orientado por Testes, esta relacionado como guia de desenvolvimento, antes, esses testes eram feitos através do console.
    - Ex: validar um cpf, API esta retornando o código e etc.
- BDD (Behavior Driven Development): Técnica de desenvolvimento ágil que visa integrar regras de negócios com linguagem de programação, focando o comportamento do software. Além disso, pode-se dizer também, que BDD é a evolução do TDD, e esta relacionado aos testes de comportamento.
    - Ex: validar um cpf, API esta retornando o código e etc.

## AULA 4 e 5 - CRIAÇÃO DO PROJETO E INICIALIZAÇÃO DO JASMINE
- Projeto criado com: Node, Express, ejs e Jasmine
- Comandos de criação:
    - ` express _nomeProjeto --view=ejs `   
    - ` yarn install ` ou ` npm install `
    - Instalar o Jasmine globalmente e após as dependencias:
    - ` npm install -g jasmine `  
    - ` npm install --save-dev jasmine `
    - ` jasmine `

- [Artigo sobre Jasmine](https://imasters.com.br/desenvolvimento/javascript-testes-com-jasmine-parte-01/#:~:text=Em%20um%20breve%20resumo%2C%20o%20Jasmine%20%C3%A9%20uma,um%20exemplo%3A%20function%20helloWorld%28%29%20%7B%20return%20%27Hello%20world%21%27%3B);   

## AULA 6 e 7 - Testes de Comportamento (Cucumber e Selenium)
- Instalação   
` npm install --save-dev cucumber `
- Rodar Scenario   
` ./node_modules/cucumber/bin/cucumber-js features/*.feature ` 

- Selenium é _conforme a documentação oficial_:   
Uma biblioteca de automação de navegador. Geralmente usado para testar aplicativos da Web, o Selenium pode ser usado para qualquer tarefa que exija automatizar a interação com o navegador.
- Instalação: `yarn add --dev selenium-webdriver` 
- Baixar e instalar o driver do navegador dentro da pasta driver do projeto. 