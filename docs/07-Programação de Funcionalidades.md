# Programação de Funcionalidades

## Tela 'Fale Conosco'
### Responsável: Fagner Vieira Pereira

Em consulta ao microfundamento "Desenvolvimento de Aplicações Móveis" e fontes externas foi gerado um "esqueleto" do formulário da tela 'Fale Conosco' por meio do site https://snack.expo.dev/. Falta adicionar o template padrão, tratar os dados lidos no formulário e integrar a pagina ao restante da aplicação. 

Por hora foi gerado o seguinte código:
```
import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      ddd: '',
      numeroCelular: '',
      email: '',
      assunto: '',
      mensagem: '',
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        <Text
          style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '20px' }}>
          Formulário de Contato
        </Text>

        <TextInput
          style={{ marginVertical: 10 }}
          placeholder="Nome"
          onChangeText={(text) => this.setState({ nome: text })}
        />

        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <TextInput
            style={{ flex: 1 }}
            placeholder="DDD"
            onChangeText={(text) => this.setState({ ddd: text })}
          />
          <TextInput
            style={{ flex: 3 }}
            placeholder="Número de Celular"
            onChangeText={(text) => this.setState({ numeroCelular: text })}
          />
        </View>

        <TextInput
          style={{ marginVertical: 10 }}
          placeholder="Email"
          onChangeText={(text) => this.setState({ email: text })}
        />

        <TextInput
          style={{ marginVertical: 10 }}
          placeholder="Assunto"
          onChangeText={(text) => this.setState({ assunto: text })}
        />

        <TextInput
          style={{ marginVertical: 10 }}
          placeholder="Mensagem"
          multiline
          onChangeText={(text) => this.setState({ mensagem: text })}
        />

        <Button title="Enviar Formulário" onPress={this.formSubmit} />
      </View>
    );
  }
}
```
Resultando na seguinte tela:

<img width="555" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/103105356/98fbe3d0-056b-45ed-bcca-2136c1d2be54">

## Crud Usuário
### Responsável: Stephanye Castellano
Em consulta ao microfundamento "Desenvolvimento de Aplicações Móveis" e fontes externas foi gerado um "esqueleto" do crud de Usuários por meio do site https://snack.expo.dev/. Falta salvar cadastrados em algum banco de dados, realizar o login e melhoria do layout.

```
import React, { useState } from 'react'
import { View, FlatList, Text } from 'react-native'
import {Appbar, TextInput, Button} from 'react-native-paper'

const UsuarioCrud = () => {
  const [usuarios, setUsuarios] = useState([])
  const [id, setId] = useState('')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [tipoUsuario, setTipoUsuario] = useState(false) 

  const generateGuid = () => {
    const S4 = () =>
      (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    return `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`
  }

  const adicionarUsuario = () => {
    if (
      nome.trim() === '' ||
      email.trim() === '' ||
      senha.trim() === '' ||
      confirmarSenha.trim() === ''
    ) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem.')
      return
    }

    const novoUsuario = {
      id: generateGuid(),
      nome,
      email,
      senha,
      tipoUsuario
    }

    setUsuarios([...usuarios, novoUsuario])
    limparFormulario()
  }

  const limparFormulario = () => {
    setId('')
    setNome('')
    setEmail('')
    setSenha('')
    setConfirmarSenha('')
    setTipoUsuario(false)
  }

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Cadastrar Novo Usuario" />
      </Appbar.Header>
      
        <TextInput
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />

        <TextInput 
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)} 
        />

        <TextInput
          label="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry
        />

        <TextInput
          label="Confirmar Senha"
          value={confirmarSenha}
          onChangeText={(text) => setConfirmarSenha(text)}
          secureTextEntry
        />

        <Button mode="contained" title="Adicionar Usuário" onPress={adicionarUsuario}> Criar Usuário</Button>

        <FlatList
          data={usuarios}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Text>{`ID: ${item.id}, Nome: ${item.nome}, Email: ${item.email}`}</Text>
            </View>
          )}
        />
      </View>
  )
}

export default UsuarioCrud
```
Vídeo do funcionamento do Cadastro de Usuário 

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/53917285/b2aeae05-a7d9-40b7-9ed1-2f5ca6dcad11



<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
