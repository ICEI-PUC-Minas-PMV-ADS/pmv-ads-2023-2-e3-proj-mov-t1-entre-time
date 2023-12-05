# Programação de Funcionalidades

## Tela 'Home'
### Responsável: Matheus Delay

Em consulta ao microfundamento "Desenvolvimento de Aplicações Móveis" e fontes externas estou desenvolvendo a tela 'Home' por meio do site https://snack.expo.dev/. A barra de pesquisa ja está funcional filtrando a pesquisa pelo titulo do evento, local, data e cidade conforme solicitado nos requisitos.

O código final ficou:
```
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Appbar, List, Searchbar, FAB as Fab } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { getEventos } from '../services/Eventos.Services';

const Eventos = () => {
  const navigation = useNavigation();
  const [eventos, setEventos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEventos, setFilteredEventos] = useState([]);

  useEffect(() => {
    getEventos().then(dados => {
      setEventos(dados);
      setFilteredEventos(dados);
    });
  }, []);

  const handleSearch = query => {
  setSearchQuery(query);
  const filteredData = eventos.filter(
    evento =>
      (evento.nomeEvento && evento.nomeEvento.toLowerCase().includes(query.toLowerCase())) ||
      (evento.nomeLocal && evento.nomeLocal.toLowerCase().includes(query.toLowerCase())) ||
      (evento.cidade && evento.cidade.toLowerCase().includes(query.toLowerCase())) ||
      (evento.dataInicioEvento && evento.dataInicioEvento.toLowerCase().includes(query.toLowerCase()))
  );
  setFilteredEventos(filteredData);
};

  const renderItem = ({ item }) => (
    <List.Item style={styles.item}
      

      titleNumberOfLines={2}
      descriptionNumberOfLines={6}
      left={(props) => (
        <Text {...props} style={styles.title} >
          {'\n' +
            item.nomeEvento +
            '\n' +
            'Local: ' +
            item.nomeLocal +
            '\n' +
            'Endereço: ' +
             item.endereco +
        ' - ' +
        item.bairro +
        ', ' +
        item.cidade +
        ' - ' +
        item.estado +
        '\n'}
        </Text>
      )}
      right={(props) => (
        <Text {...props} style={styles.description} >
          {'\n' +
            'Data: ' +
            item.dataInicioEvento +
            '\n' +
            'Horário: ' +
            item.horaInicioEvento +
            '\n' +
            'Entrada: R$:' +
            item.valorEntrada}
        </Text>
      )}
      onPress={() => navigation.navigate('Adicionar Eventos', { item })}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => {}} />
        <Appbar.Content title="Menu Eventos" />
        <Appbar.Action icon="account-box" onPress={() => {}} />
      </Appbar.Header>

      <View style={{ paddingHorizontal: 10 }}>
        <Searchbar
          placeholder="Pesquise pelo evento"
          onChangeText={handleSearch}
          value={searchQuery}
        />
      </View>

      <FlatList
        data={filteredEventos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />

      <Fab
        style={styles.Fab}
        small
        icon="plus"
        onPress={() => navigation.navigate('Adicionar Eventos')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  item: {
    backgroundColor: '#5c1ae8',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 16,
  },
  title: {
    fontSize: 14,
    color: 'white',
  },
  description: {
    fontSize: 12,
    color: 'white',
  },
});

export default Eventos;
```
Resultando na seguinte tela:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/113395332/ec7b7fc4-8eeb-40e2-95c2-9cc1504396ce)


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
Em consulta ao microfundamento "Desenvolvimento de Aplicações Móveis" e fontes externas foi gerado um "esqueleto" do crud de Usuários por meio do site https://snack.expo.dev/. Utilização do Json Server para Salvar os usuarios no banco de dados. Visualmente nao teve alteração. Ajustes nos Planos de Testes de Software e de Usabilidade

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
      alert('Por favor, preencha todos os campos.')
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

## Tela 'Menu Lateral'
### Responsável: Pedro Henrique

Em consulta ao microfundamento "Desenvolvimento de Aplicações Móveis" e de algumas outras fontes externas foi gerado o primeiro esboço do que será o "Menu Lateral" que estará presente em toda a aplicação, permitindo uma navegação intuitiva e funcional entre todas as telas do nosso projeto. A estrutura está praticamente pronta, mas ainda faltam algumas melhorias na funcionalidade em si, assim como no layout para melhorar a experiência do usuário. 

Por hora foi gerado o seguinte código:
```
import * as React from 'react';
import { View, Text } from 'react-native';

import Eventos from '../pages/Eventos';
import Home from '../pages/Home';
import Login from '../pages/LoginUsuario';
import Cadastro from '../pages/CadastroUsuario';
import AddEventos from '../pages/AddEventos';
import Configs from '../pages/Configs';
import Contato from '../pages/Contato';
import Duvidas from '../pages/Duvidas';

import Logo from './Avatar'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

function Avatar(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label={Logo}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function Header() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <><Avatar {...props} /></>}  
      screenOptions={{ 
        drawerStyle: {
          flex: 1,
          backgroundColor: '#c6cbef',
          width: 240,
        },
      }}>

      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Cadastro" component={Cadastro} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Eventos" component={Eventos} />
      <Drawer.Screen name="Adicionar Eventos" component={AddEventos} />
      <Drawer.Screen name="Contato" component={Contato} />
      <Drawer.Screen name="Dúvidas" component={Duvidas} />
      <Drawer.Screen name="Configurações" component={Configs} />

    </Drawer.Navigator>
  );

}

export default function App() {
  return (
    <NavigationContainer>
      <Header />
    </NavigationContainer>
  );
}
```
Vídeo do resultado até o momento:

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/112659128/f7d19ea8-24cc-4fd5-9828-45bba2ac72b5


## Tela 'FAQ'
### Responsável: Jeferson Felix

Em consulta ao microfundamento "Desenvolvimento de Aplicações Móveis" e fontes externas estou desenvolvendo a tela 'FAQ' por meio do site https://snack.expo.dev/, o backend está sendo feito por meio de uma Fake API utilizando o Json Server. Falta implementar o template padrão de design da aplicação e o dropdown que ao clicar em uma pergunta específica a resposta correspondente aparecerá.

Até o momento foi gerado o seguinte código:

Página do Faq:
```
import * as React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { List } from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';

import Header from '../componentes/header';
import Container from '../componentes/container';
import Body from '../componentes/body';
import {getFaq} from '../services/faq.services'

const Faq = () => {
  const isFocused = useIsFocused();
  const [faq, setFaq] = React.useState([]);

  React.useEffect(() => {
    getFaq().then(dados => {
      console.log(dados);
      setFaq(dados);
    });
  }, [isFocused]);

  const renderItem = ({ item }) => (
    <List.Item
      title={item.pergunta}
      description={item.resposta}
      style={styles.item}
    />
  );

  return (
    <Container>
      <Header title={'Dúvidas frequentes'} />
      <Body>
        <FlatList
        data={faq}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
      </Body>
    </Container>
  )
}

const styles = StyleSheet.create({
  item:{
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8'
  },
});

export default Faq;
```

Consulta no Json Server:
```
import axios from 'axios';

const API = axios.create();

export default API;
```
```
export const BASE_URL = '...';
```
```
import API from './webapi.services';
import {BASE_URL} from './urls';

export const getFaq = async () => {
  try{
    return await API.get(`${BASE_URL}/faq`).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}
```
Resultado na seguinte tela:

![Captura de Tela 2023-10-15 às 10 41 51](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/82223068/23e398c7-4ba2-4540-937d-57a702f43e74)


<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

### Responsável: Daniel Mendes Rufino Silva
### Programação de Funcionalidades- Etapa 5
## Crud Eventos com tela para inserção, edição e exclusão de eventos.
Foi criado, no Vercel, o site, para persistência dos dados.
https://entre-time-json.vercel.app 

>Print da tela do App, mostrando a opção de salvar um evento.
![Adicionar eventos](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/98750413/a709d4b3-e71f-4d8c-a8aa-2a7d5deb0833)


>Print da tela do App, mostrando a opção de editar, podendo salvar o evento editado ou excluir evento.
>![Adicionando evento](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/98750413/4a053ac7-54f4-49cf-9ee7-7e6ad506c35b)





> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
