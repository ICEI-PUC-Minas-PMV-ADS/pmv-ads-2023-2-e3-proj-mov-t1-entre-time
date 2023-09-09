# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

| **Caso de Teste** 	| **CT-01 – Tela Inicial e Pesquisa de Eventos** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001: A aplicação deve ter uma tela inicial onde será possível pesquisar os eventos e estabelecimentos que ofereçam algum tipo de entretenimento. |
| Objetivo do Teste 	| Verificar se a tela inicial e a pesquisa funcionam corretamente. |
| Testes 	| 1. Teste de Navegação: <br> - Verificar se a tela inicial é exibida corretamente ao abrir o aplicativo. <br> - Garantir que os eventos são exibidos corretamente na tela. <br> - Garantir que há uma opção de pesquisa visível na tela inicial. <br> 2. Teste de Pesquisa: <br> - Inserir diferentes consultas de pesquisa na barra de pesquisa. <br> - Verificar se os resultados são exibidos de acordo com a consulta.|
|Critério de Êxito | - |
|  	|  	|
| **Caso de Teste** 	| **CT-02 – Páginas de Eventos Agrupados** 	|
|	Requisito Associado 	| RF-002: A aplicação deve ter páginas com eventos similares agrupados. |
| Objetivo do Teste 	| Verificar se os eventos são agrupados corretamente. |
| Testes 	| 1. Teste de Exibição de Páginas: <br> - Acessar a página de eventos agrupados. <br> - Verificar se os eventos similares estão agrupados corretamente. <br> 2. Teste de Navegação entre Páginas: <br> - Verificar se é possível navegar entre as páginas de eventos agrupados. <br> - Garantir que os eventos relacionados sejam exibidos em cada página.|
|Critério de Êxito | - |
|  	|  	|
| **Caso de Teste** 	| **CT-03 – Verificação de Agenda** 	|
|	Requisito Associado 	| RF-003: A aplicação deve permitir verificar a agenda de um local específico. |
| Objetivo do Teste 	| Verificação de agenda de um local específico. |
| Testes 	| 1. Teste de Seleção de Local: <br> - Selecionar um local específico.  <br> - Verificar se a agenda do local é exibida corretamente. <br> 2. Teste de Detalhes do Evento: <br> - Selecionar um evento na agenda. <br> - Verificar se os detalhes do evento são exibidos corretamente.|
|Critério de Êxito | - |
|  	|  	|
| **Caso de Teste** 	| **CT-04 – Filtros** 	|
|	Requisito Associado 	| RF-004: A aplicação deve dar para visualizar eventos em uma cidade distante da minha. <br> RF-005: A aplicação deve permitir o usuário filtrar a distância em quilometragem que ele esteja disposto a ir para um evento. <br> RF-011: A aplicação deve ser capaz de deixar o usuário visualizar eventos com base em sua geolocalização. <br> RF-012: A aplicação deve permitir a consulta por períodos. |
| Objetivo do Teste 	| Verificação de filtros. |
| Testes 	| 1. Teste de Filtros: <br> - Aplicar vários filtros de pesquisa, como data, categoria, etc. <br> - Verificar se os resultados são atualizados conforme os filtros aplicados. <br> 2. Teste de Seleção de Cidade: <br> - Escolher uma cidade distante da localização atual. <br> - Verificar se os eventos nessa cidade são exibidos corretamente. <br> 3. Teste de Filtro por Distância: <br> - Aplicar diferentes valores de distância no filtro. <br> - Verificar se os eventos são filtrados corretamente com base na distância. <br> 4. Teste de Geolocalização: <br> - Ativar a geolocalização do dispositivo. <br> - Verificar se os eventos próximos à localização atual do usuário são exibidos corretamente. <br> 5. Teste de Consulta por Data: <br> - Realizar consultas de eventos em diferentes períodos (por exemplo, hoje, esta semana, este mês). <br> - Verificar se os eventos são filtrados de acordo com o período selecionado. |
|Critério de Êxito | - |
|  	|  	|
| **Caso de Teste** 	| **CT-05 – Visualização de Barzinhos Populares** 	|
|	Requisito Associado 	| RF-006: A aplicação deve visualizar os barzinhos mais populares da cidade. |
| Objetivo do Teste 	| Verificação de barzinhos populares. |
| Testes 	| 1. Teste de Visualização: <br> - Acessar a seção de barzinhos populares. <br> - Verificar se os barzinhos populares são listados corretamente. |
|Critério de Êxito | - |
|  	|  	|
| **Caso de Teste** 	| **CT-06 – Avaliação de Locais e Eventos** 	|
|	Requisito Associado 	| RF-007: A aplicação deve permitir que o usuário avalie os locais e eventos que ele frequentou recentemente. |
| Objetivo do Teste 	| Verificação de avaliações. |
| Testes 	| 1. Teste de Avaliação: <br> - Frequente um local ou evento. <br> - Avaliar o local/evento. <br> - Verificar se a avaliação é registrada corretamente.|
|Critério de Êxito | - |
|  	|  	|
| **Caso de Teste** 	| **CT-07 – Autogerenciamento de Usuários** 	|
|	Requisito Associado 	| RF-008: A aplicação deve possibilitar o autogerenciamento de usuários. |
| Objetivo do Teste 	| Verificação de usuários. |
| Testes 	| 1. Teste de Registro: <br> - Criar uma nova conta de usuário. <br> - Verificar se a conta é criada com sucesso. <br> 2. Teste de Atualização de Perfil: <br> - Atualizar informações do perfil do usuário. <br> - Verificar se as informações são atualizadas corretamente.|
|Critério de Êxito | - |
|  	|  	|
| **Caso de Teste** 	| **CT-08 – Suporte/Dúvidas** 	|
|	Requisito Associado 	| RF-009: A aplicação deve ter uma sessão de Suporte/Dúvidas. |
| Objetivo do Teste 	| Verificação sessão de suporte/dúvidas. |
| Testes 	| 1. Teste de Acesso ao Suporte: <br> - Acessar a sessão de suporte/dúvidas. <br> - Verificar se há informações úteis disponíveis.|
|Critério de Êxito | - |
|  	|  	|
| **Caso de Teste** 	| **CT-09 – Informações do Evento do Planejador** 	|
|	Requisito Associado 	| RF-010: A aplicação deve oferecer para o planejador do evento campos obrigatórios sobre informações do evento, como nome, local, horário de início e fim, tipo de ambiente, estilo de evento, programação e regras do espaço onde o evento será realizado. |
| Objetivo do Teste 	| Verificação sessão de agendamento de eventos. |
| Testes 	| 1. Teste de Preenchimento de Campos Obrigatórios: <br> - Criar um evento como planejador. <br> - Verificar se todos os campos obrigatórios são apresentados e podem ser preenchidos. <br> - Verificar se o evento está sendo armazenado corretamente|
|Critério de Êxito | - |

## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
