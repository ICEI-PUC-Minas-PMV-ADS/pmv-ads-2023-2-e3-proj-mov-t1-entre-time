# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

### Obs! Informações serão preenchidas para a etapa 5

### CT-01 – Pesquisa de Eventos.

#### Todos os eventos são listados em ordem, e ao pesquisar pelo nome do evento ele apresenta somente o evento em específico conforme no print abaixo.
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/113395332/ec7b7fc4-8eeb-40e2-95c2-9cc1504396ce)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/113395332/b373a659-3f5d-458b-ad22-5f08f6547973)


### CT-02 – Pesquisa de Estabelecimentos.

#### Da mesma maneira que o primeiro plano de teste, a pesquisa de estabelecimento funciona como pesquisa.
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/113395332/fcb77d97-f8fc-4dc8-8af4-9a805fc43edc)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/113395332/8019d18e-5e17-4c2f-844a-dab06a44e5ed)


### CT-03 – Trazer eventos similares quando realiza a pesquisa.

#### Ao pesquisar por um evento de Natal, também será apresentado mais eventos com titulo ou local similares
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/113395332/923243b1-fea2-431d-8607-4c61113fa0b0)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/113395332/ea3a45da-c18b-4a42-8305-6a0243e19166)


### CT-04 – Buscar eventos de um local específico.

#### Da mesma maneira que o segundo plano de teste, ao pesquisar por um ou mais eventos que irão ocorrer no mesmo local / estabelecimento ele será apresentado.
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/113395332/fcb77d97-f8fc-4dc8-8af4-9a805fc43edc)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/113395332/8019d18e-5e17-4c2f-844a-dab06a44e5ed)


### CT-05 – Pesquisar eventos de outra cidade.

#### Pesquisando pela cidade do evento também é possível filtrar.
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/113395332/83318699-b9ea-4012-8d9a-c27768d11b2c)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/113395332/9f71673a-1ec2-4f82-b0e9-cc12a2fb4b35)


### CT-06 – Cadastro de usuário.
![Usuário cadastrado com sucesso](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/98750413/fecbe880-beb1-49a7-81f8-ac0b51ab072d)

### CT-07 – Tentar criar usuário com campos vazios.
![Usuário não cadastrado](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/98750413/828e10b0-d74b-4dbb-9e1c-f09e0b13d277)

### CT-08 – Tentar criar usuário com campos senha e Confirmar senha diferentes.
![As senhas não coincidem](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/98750413/6d0a447d-39e9-4468-a48e-6e1abb77a944)

### CT-09 – Editar usuário.

### CT-10 – Deletar usuário.

### CT-11 – Realizar login.

### CT-12 – Realizar login com email inválido.

### CT-13 – Realizar login com senha inválida.

### CT-14 – Acessar Tela de Suporte/Dúvidas.

#### Apertando na opção Faq no menu de navegação a tela de dúvidas é exibida.

![Screenshot at Dec 04 22-59-41](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/82223068/046dea57-d230-41b9-bccc-30c1d0ad16a7)
![Screenshot at Dec 04 22-59-59](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/82223068/1209fb6a-3a72-4c3d-bd1f-d8cfc92ffff2)

### CT-15 – Cadastro de eventos.

#### Apertando no botão + é possivel adicionar um evento.

![Screenshot at Dec 04 23-02-25](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/82223068/b72d1a9e-058e-4a3d-978b-9aece132f7b4)

#### Preenchendo os campos o evento é cadastrado.

![Screenshot at Dec 04 23-04-34](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/82223068/e0f4087b-a71e-40a7-8589-e611c1bd545e)
![Screenshot at Dec 04 23-04-55](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/82223068/3acd8391-63df-44cd-ae1d-44a6b08d4d45)


### CT-16 – Editar um evento.
#### Ao editar um evento todos os campos são setados como "Undefined".
![Screenshot at Dec 05 17-58-06](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/82223068/285d3775-fcc5-46f9-bd3b-7757f745f558)
![Screenshot at Dec 05 17-58-16](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/82223068/8eb00c43-2791-4043-8f30-14b4e39cdcde)


### CT-17 – Excluir um evento.
#### Ao apertar no botão de excluir na edição do evento ele é deletado com sucesso.
![Screenshot at Dec 05 17-56-48](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/82223068/fe5de6d8-86d4-4361-b67c-d92d02db79d1)
![Screenshot at Dec 05 17-56-58](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/82223068/aaf95f1d-d52a-492e-9732-e889f3ad531d)


### CT-18 – Tentar cadastrar evento faltando informação.
#### Ao cadastrar um evento sem os campos necessários o evento é cadastrado com os campos "Null".
![Screenshot at Dec 05 17-54-25](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/82223068/2ce00ae7-fbd4-4ee9-8871-c903353a7233)
![Screenshot at Dec 05 17-54-54](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/82223068/28e8a332-106a-4074-be94-0877f6fd40d9)


### CT-19 – Consulta por datas.

#### Ao consultar a data de um evento também é possível filtrar os eventos pela data, conforme abaixo.
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/113395332/0a97f289-d6b4-4829-b5bf-e8cce4523ce4)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/113395332/29a97e5f-89f3-4dfa-9dd6-f595a1991833)


> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
