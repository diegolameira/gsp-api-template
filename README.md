###### gsp-api-template
Template para APIs em NodeJS utilizadas na Zoop pelo time de Gestão de Serviços ao Parceiro

*Por favor mantenha esta documentação atualizada*

## Índice:

1. [Pré-Requisitos](#pré-requisitos)
2. [Instruções para execução](#instruções-para-execução)
3. [Arquitetura do Projeto](#arquitetura-do-projeto)
4. [Testes do Projeto](#testes-do-projeto)
5. [Rotas](#rotas)

## Pré-Requisitos

* node
* npm
* npx

## Instruções para execução

O projeto está estruturado para rodar localmente através de uma configuração local.

#### Local
> Criar uma cópia do arquivo `example.env`. Renomear para `.env`, e adicionar as variáveis solicitadas.
> Executar `npm i && npm start`
> Para teste de funcionamento você pode efetuar a consulta do HealthCheck em seu navegador:
>`http://localhost:3000/healthcheck`
#### AWS LAB Zoop

Utilizamos a lib Claudia.js que efetua a criação e subida do lambda de forma automática para a AWS. Os comandos da lib para isso já foram adicionados ao package.json:

- `npm run create`: criará os perfis, permissões e subir o lambda, irá responder com a URL para acesso.
- `npm run update`: atualizará o lambda já existente com novo código, irá responder com a URL para acesso.

> Esses comandos fazem uso de um `profile zoop` no _AWS-CLI_, portanto é necessário que você tenha um profile com esse nome em sua configuração local.
Em caso de dúvida para essa criação do profile leia a [documentação](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html#cli-quick-configuration-multi-profiles) do _aws-cli_. 
Para testar utilize a URL de resposta do processo de subida do Lambda e acesse a rota `/healthcheck`

Caso queira gerar um arquivo **ZIP** para subir pela AWS, utilize o comando: `npm run zip`


## Arquitetura do Projeto

**1. Principais pastas:**

- _src_: pasta de desenvolvimento da API;
- _src/controllers_: funções que serão executadas nas chamadas das routas;
- _src/routes_: services, com a definição das rotas da API;

**2. Principais libs utilizadas:**

- aws-sdk;
- express;
- claudia (dev);
- eslint (dev);
- nodemon (dev);
- jest (dev);
- supertest (dev);

## Testes do Projeto

Está sendo utilizado as libs de teste _Jest_ e _Supertest_ para execução dos testes unitários e funcionais de rotas. Há um exemplo de modelo a seguir para o controler `healthcheck` (unitário).

#### Testes Unitários
Para executar os testes unitários basta executar o comando `npm start` e executar um dos comandos de teste:
```
npm run test
npm run test:watch
```

Caso queira rodar com os testes de cobertura é necessário que o docker esteja rodando e executar:

```
npm run test:coverage
```

#### Construção dos Testes

Para os testes unitários foi criado um mock específico dentro da pasta util `mockInterceptor` para simular o req e res das funções de controller.

No caso de testes unitários usar como referência o arquivo `healthcheck.spec.js` dentro da pasta `controller > __tests__`.

## Rotas

##### HealhCheck

- **GET** `/healthcheck`

  Rota de checagem do funcionamento da API.

  Atributos: -

  Retorno:
    ```
    {
      healthCheck: 'Ok',
      date: <Data da conexão>
    }
    ```

[Voltar para o índice](#índice)