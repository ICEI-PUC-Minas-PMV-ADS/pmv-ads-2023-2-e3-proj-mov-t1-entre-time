# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

![Diagrama de Classes](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/98750413/43f5bd36-82a9-4b68-8460-687c296e30a4)

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/blob/main/docs/img/05-Modelo-ER.png)

## Esquema Relacional

<img width="803" alt="Captura de Tela 2023-09-24 às 10 38 32" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/82223068/ec10c07a-51b2-4c42-aca4-383adf336c08">

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

- Linguagem: JavaScript
- Bibliotecas: React, React Native, React Native Paper, React Navigation, Date Time Picker, Axios
- IDE: Visual Studio Code, Expo Dev
- Ferramentas: Json Server, Json Server Auth, LocalTunnel

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

### 1. Funcionalidade:
- Adequação funcional: Garantir que o aplicativo ofereça as funcionalidades necessárias para a divulgação de eventos.
- Interoperabilidade: Permitir que o aplicativo se integre com outros serviços ou aplicativos relevantes, como redes sociais.

### 2. Confiabilidade:
- Maturidade: Certificar-se de que o aplicativo seja confiável e livre de falhas significativas.
- Tolerância a falhas: Garantir que o aplicativo continue funcionando de forma adequada mesmo em situações de falha.

### 3.Usabilidade:
- Compreensibilidade: Certificar-se de que a interface do usuário seja fácil de entender.
- Aprendizagem: Facilitar o aprendizado do uso do aplicativo para novos usuários.
- Eficiência de uso: Garantir que o aplicativo seja eficiente e não exija muito tempo ou esforço do usuário.

### 4.Eficiência de Desempenho:
- Desempenho em termos de tempo: Garantir que o aplicativo responda rapidamente às interações do usuário.
- Utilização de recursos: Certificar-se de que o aplicativo utilize recursos do dispositivo (como bateria e CPU) de forma eficiente.

### 5.Segurança:
- Confidencialidade: Proteger informações confidenciais dos usuários e dados do evento.
- Integridade: Garantir que os dados não sejam corrompidos ou alterados por terceiros não autorizados.

### 6.Manutenibilidade:
- Modificabilidade: Facilitar a manutenção e atualizações do aplicativo para adicionar novos recursos ou corrigir problemas.
- Estabilidade: Garantir que as modificações não causem novos problemas.

### 7.Compatibilidade:
- Compatibilidade: Garantir que o aplicativo funcione em diferentes dispositivos móveis
