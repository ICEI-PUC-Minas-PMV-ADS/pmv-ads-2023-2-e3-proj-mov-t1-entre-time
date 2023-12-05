# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

| **Caso de Teste** 	| **CT-01 – Pesquisa de Eventos** |
|:---:	|:---:	|
| Requisito Associado | RF-01: A aplicação deve ter uma tela inicial onde será possível pesquisar os eventos e estabelecimentos que ofereçam algum tipo de entretenimento. |
| Objetivo do Teste | Verificar se a pesquisa de eventos estão funcionando. |
| Testes | - Acessar a aplicação na tela inicial. <br> - Em filtro selecionar o tipo de evento. <br> - CLicar em "Pesquisar". <br> - Então deverá aparecer os eventos conforme a seleção anterior. |
| Critério de Êxito | Aparecer uma lista de eventos conforme o tema escolhido. |
|  	|  	|
| **Caso de Teste** 	| **CT-02 – Pesquisa de Estabelecimentos** |
| Requisito Associado | RF-01: A aplicação deve ter uma tela inicial onde será possível pesquisar os eventos e estabelecimentos que ofereçam algum tipo de entretenimento. |
| Objetivo do Teste | Verificar se a pesquisa de estabelecimentos estão funcionando. |
| Testes | - Acessar a aplicação na tela inicial. <br> - Em filtro selecionar o tipo de estabelecimento. <br> - CLicar em "Pesquisar". <br> - Então deverá aparecer os estabalecimentos conforme a seleção anterior. |
| Critério de Êxito | Aparecer uma lista de estabelecimentos conforme o tema escolhido. |
|  	|  	|
| **Caso de Teste** 	| **CT-03 – Trazer eventos similares quando realiza a pesquisa** |
| Requisito Associado | RF-02 - A aplicação deve ter páginas com eventos similares agrupados. |
| Objetivo do Teste | Agrupar um tipo de evento especifico conforme a pesquisa realizada. |
| Testes | - Acessar a aplicação na tela inicial. <br> - Em filtro selecionar o tipo de eventos. <br> - CLicar em "Pesquisar". <br> - Então deverá aparecer uma lista de eventos agrupados. |
|Critério de Êxito | Aparecer uma lista de estabelecimentos agrupadas conforme o tema escolhido. |
|  	|  	|
| **Caso de Teste** 	| **CT-04 – Buscar eventos de um local específico** |
| Requisito Associado | RF-03 - A aplicação deve permitir verificar a agenda de um local específico. |
| Objetivo do Teste | Visualizar agenda de um local especifíco. |
| Testes | - Acessar a aplicação na tela inicial. <br> - Em filtro selecionar o local. <br> - CLicar em "Pesquisar". <br> - Então deverá aparecer uma lista eventos naquele lugar. |
| Critério de Êxito | Aparecer eventos de um único local. |
|  	|  	|
| **Caso de Teste** 	| **CT-05 – Pesquisar eventos de outra cidade** |
| Requisito Associado | RF-04 – A aplicação deve dar para visualizar eventos em uma cidade distante da minha. |
| Objetivo do Teste | Visualizar agenda de outra cidade. |
| Testes | - Acessar a aplicação na tela inicial. <br> - Em filtro selecionar a cidade desejada. <br> - CLicar em "Pesquisar". <br> - Então deverá aparecer uma lista eventos daquela cidade |
| Critério de Êxito | Aparecer eventos da cidade selecionada. |
|  	|  	|
| **Caso de Teste** 	| **CT-06 – Cadastro de usuário** |
| Requisito Associado | RF-08 - A aplicação deve possibilitar o autogerenciamento de usuários. |
| Objetivo do Teste | Poder cadastrar um usuário apra ter acesso a mais funcionalidades do sistema. |
| Testes | - Acessar a aplicação na tela inicial. <br> - Selecionar o icone de usuário  <br> - Clicar na opção "Adicionar usuário <br> - Preencher todos os campos corretamente. <br> - Clicar em "Criar usuário". <br> - Usuário será cadastrado com sucesso e aparecerá os dados da tela principal do sistema |
| Critério de Êxito | Cadastro do usuário realizado com sucesso e redirecionamento para a tela principal do sistema. |
|  	|  	|
| **Caso de Teste** 	| **CT-07 – Tentar criar usuário com campos vazios** |
| Requisito Associado | RF-08 - A aplicação deve possibilitar o autogerenciamento de usuários. |
| Objetivo do Teste | Impedir que um usuário faça cadastro com dados faltantes |
| Testes | - Acessar a aplicação na tela inicial. <br> - Selecionar o icone de usuário  <br> - Clicar na opção "Adicionar usuário <br> - Deixar de preencher 1 ou vários campos. <br> - Clicar em "Criar usuário". <br> - Usuário deverá receber um alerta informando que falta campos a serem preenchidos. |
| Critério de Êxito | Falha ao tentar cadastrar usuário por falta de dados. |
|  	|  	|
| **Caso de Teste** 	| **CT-08 – Tentar criar usuário com campos senha e Confirmar senha diferentes** |
| Requisito Associado | RF-08 - A aplicação deve possibilitar o autogerenciamento de usuários. |
| Objetivo do Teste | Impedir que um usuário faça cadastro com senha e confirmar senha diferentes |
| Testes | - Acessar a aplicação na tela inicial. <br> - Selecionar o icone de usuário  <br> - Clicar na opção "Adicionar usuário <br> - Inserir senha ABCDEF e inserir em Confirmar senha 123456. <br> - Clicar em "Criar usuário". <br> - Usuário deverá receber um alerta informando as senhas não coincidem. |
| Critério de Êxito | Falha ao tentar cadastrar usuário senhas não coincidirem. |
|  	|  	|
| **Caso de Teste** 	| **CT-09 – Editar usuário** |
| Requisito Associado | RF-08 - A aplicação deve possibilitar o autogerenciamento de usuários. |
| Objetivo do Teste | Editar um usuário com sucesso |
| Testes | - Acessar a aplicação na tela inicial. <br> - Selecionar o icone de usuário  <br> - Realize o login <br> - Clicar em "Editar Usuário". <br> - Modificar os campos necessarios. <br> - Clicar em "Salvar Alterações". <br> - Então as alterçãoes serão feitas com sucesso. |
| Critério de Êxito | Alterar informações do usuário com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-10 – Deletar usuário** |
| Requisito Associado | RF-08 - A aplicação deve possibilitar o autogerenciamento de usuários. |
| Objetivo do Teste | Deletar um usuário com sucesso |
| Testes | - Acessar a aplicação na tela inicial. <br> - Selecionar o icone de usuário  <br> - Realize o login <br> - Clicar em "Deletar Usuário". <br> - Clicar em "Confirmar deleção". <br> - Então o usuário será deletado com sucesso. |
| Critério de Êxito | Usuário não existir mais no banco de dados e nem conseguir logar mais no sistema |
|  	|  	|
| **Caso de Teste** 	| **CT-11 – Realizar login** |
| Requisito Associado | RF-08 - A aplicação deve possibilitar o autogerenciamento de usuários. |
| Objetivo do Teste | Realizar login com sucesso |
| Testes | - Acessar a aplicação na tela inicial. <br> - Selecionar o icone de usuário  <br> - Digitar email e senha corretamente. <br> - Então acessará a tela principal do sistema |
| Critério de Êxito | Usuário conseguiu realizar o login com sucesso |
|  	|  	|
| **Caso de Teste** 	| **CT-12 – Realizar login com email inválido** |
| Requisito Associado | RF-08 - A aplicação deve possibilitar o autogerenciamento de usuários. |
| Objetivo do Teste | Falhar o login com email não existente no banco de dados |
| Testes | - Acessar a aplicação na tela inicial. <br> - Selecionar o icone de usuário  <br> - Digitar email errado ou vazio e senha corretamente. <br> - Então o sistema deverá emitir um alerta com o email inválido |
| Critério de Êxito | Usuário falhou ao realizar o login devido o email inválido |
|  	|  	|
| **Caso de Teste** 	| **CT-13 – Realizar login com senha inválida** |
| Requisito Associado | RF-08 - A aplicação deve possibilitar o autogerenciamento de usuários. |
| Objetivo do Teste | Falhar o login com senha não existente no banco de dados |
| Testes | - Acessar a aplicação na tela inicial. <br> - Selecionar o icone de usuário  <br> - Digitar email correto e senha inválida. <br> - Então o sistema deverá emitir um alerta com o senha inválida |
| Critério de Êxito | Usuário falhou ao realizar o login devido a senha inválida |
|  	|  	|
| **Caso de Teste** 	| **CT-14 – Acessar Tela de Suporte/Dúvidas** |
| Requisito Associado | RF-09 - A aplicação deve ter uma sessão de Suporte/Dúvidas. |
| Objetivo do Teste | Acessar a tela de Suporte/Dúvidas para o melhor entendimento do sistema |
| Testes | - Acessar a aplicação na tela inicial. <br> - Selecionar o icone de "Suporte/Dúvidas"  <br> - Sistema deve direcionar o usuário para a página Suporte/Dúvida |
| Critério de Êxito | Usuário visualizar a tela de Suporte/Dúvidas |
|  	|  	|
| **Caso de Teste** 	| **CT-15 – Cadastro de eventos** |
| Requisito Associado | RF-10 - A aplicação deve oferecer para o planejador do evento campos obrigatórios sobre informações do evento, como nome, local, horário de início e fim, tipo de ambiente, estilo de evento, programação e regras do espaço onde o evento será realizado. |
| Objetivo do Teste | Cadastrar um evento com sucesso. |
| Testes | - Acessar a aplicação com um usuário do tipo Empreendendor. <br> - Clicar em "+" para adicionar um evento  <br> - Preencher os campos corretamente. <br> - Clicar em "Salvar Evento". <br> - Então o sistema salvará o evento e ficará visivel para todos os usuários |
| Critério de Êxito | Usuário do tipo Empreendedor finalizar o cadastro de Evento com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-16 – Editar um evento** |
| Requisito Associado | RF-10 - A aplicação deve oferecer para o planejador do evento campos obrigatórios sobre informações do evento, como nome, local, horário de início e fim, tipo de ambiente, estilo de evento, programação e regras do espaço onde o evento será realizado. |
| Objetivo do Teste | Editar um evento com sucesso. |
| Testes | - Acessar a aplicação com um usuário do tipo Empreendendor. <br> - Clicar em "Editar Evento". <br> - Preencher os campos corretamente. <br> - Clicar em "Atualizar Evento". <br> - Então o sistema salvará o evento com as modificações e ficará visivel para todos os usuários |
| Critério de Êxito | Usuário do tipo Empreendedor conseguiu editar um Evento com sucesso. 
|  	|  	|
| **Caso de Teste** 	| **CT-17 – Excluir um evento** |
| Requisito Associado | RF-10 - A aplicação deve oferecer para o planejador do evento campos obrigatórios sobre informações do evento, como nome, local, horário de início e fim, tipo de ambiente, estilo de evento, programação e regras do espaço onde o evento será realizado. |
| Objetivo do Teste | Excluir um evento com sucesso. |
| Testes | - Acessar a aplicação com um usuário do tipo Empreendendor. <br> - Clicar em "Excluir Evento".  <br> - Então o sistema excluirá o evento e não aparecerá mais para os usuários. |
| Critério de Êxito | Usuário do tipo Empreendedor conseguiu excluir um evento com sucesso e não aparecerá mais para os usuários. 
|  	|  	|
| **Caso de Teste** 	| **CT-18 – Tentar cadastrar evento faltando informação** |
| Requisito Associado | RF-10 - A aplicação deve oferecer para o planejador do evento campos obrigatórios sobre informações do evento, como nome, local, horário de início e fim, tipo de ambiente, estilo de evento, programação e regras do espaço onde o evento será realizado. |
| Testes | - Acessar a aplicação com um usuário do tipo Empreendendor. <br> - Clicar em "+" para adicionar um evento  <br> - Preencher os campos deixando um ou mais campos vazios. <br> - Clicar em "Salvar Evento". <br> - Então o sistema deverá emitir um alerta informando que todos os cmapos deverão ser preenchidos. |
| Critério de Êxito | Usuário falhou ao adicionar o evento devido a falta de informação. |
|  	|  	|
| **Caso de Teste** 	| **CT-19 – Consulta por datas** |
| Requisito Associado | RF-12 - A aplicação deve permitir a consulta por períodos. |
| Objetivo do Teste | Realizar uma pesquisa conforme a data selecionada no filtro. |
| Testes | - Acessar a aplicação na tela inicial. <br> - Em filtro selecionar uma data específica. <br> - CLicar em "Pesquisar". <br> - Então deverá aparecer uma lista eventos dentro da data selecionada. |
| Critério de Êxito | Aparecer uma lista de eventos com a data selecionada. |


## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> - [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
