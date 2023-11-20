# Programação de Funcionalidades

## Tela 'Home'
### Responsável: Matheus Delay

Em consulta ao microfundamento "Desenvolvimento de Aplicações Móveis" e fontes externas estou desenvolvendo a tela 'Home' por meio do site https://snack.expo.dev/. A barra de pesquisa ja está funcional filtrando a pesquisa pelo titulo do evento ou descrição. Resta agora desenvolver a funcionalidade de filtrar os eventos com base em sua localização.

Até o momento foi gerado o seguinte código:
```
import React, { useState, useEffect } from 'react';
import { Platform, View, Text, FlatList, StyleSheet, StatusBar } from 'react-native';
import { Appbar, Avatar, Searchbar } from 'react-native-paper';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Primeiro Evento',
    description: 'Av. Cândido Hartmann, S/N - Bigorrilho, Curitiba - PR, 82025-160',
  },
  {
    id: 'bd7acaea-c1b4-46c2-aee5-3ad53abd28ba',
    title: 'Segundo Evento',
    description: 'R. Jorge Alves Hathy, 117 - Jardim da Colina, Campina Grande do Sul - PR, 83430-000',
  },
  {
    id: 'bd7bdaea-c1b4-46c2-aee5-3ad53aed28ba',
    title: 'Terceiro Evento',
    description: 'R. Júlio César Setenareski, 150 - Col. Mergulhão, São José dos Pinhais - PR, 83085-290',
  },
];

const Item = ({ title, description }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(DATA);

  useEffect(() => {
    const filteredEvents = DATA.filter((event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredEvents);
  }, [searchQuery]);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description} />
  );

  return (
    <>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => {}} />
        <Avatar.Image size={38} source={require('../assets/Screenshot_2.png')} />
        <Appbar.Content title="Menu Eventos" />
        <Appbar.Action icon="account-box" onPress={() => {}} />
      </Appbar.Header>
      <Searchbar
        placeholder="Pesquisar"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style={styles.container}>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#5c1ae8',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
    color: 'white',
  },
  description: {
    fontSize: 16,
    color: 'white',
  },
});

export default Home;
```
Resultando na seguinte tela:

![Imagem do WhatsApp de 2023-10-15 à(s) 08 27 55_b769926e](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/113395332/22a40f16-010c-4040-9413-a7c3cb3ab786)


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
Em consulta ao microfundamento "Desenvolvimento de Aplicações Móveis" e fontes externas foi gerado um "esqueleto" do crud de Usuários por meio do site https://snack.expo.dev/. Utilização do Json Server para Salvar os usuarios no banco de dados. Visualmente nao teve alteração. Ajustes no plano de testes.

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

### Programação de Funcionalidades- Etapa 4
### Responsável: Daniel Mendes Rufino Silva
## Crud Eventos com tela para inserção, edição e exclusão de eventos e outra com a listagem dos eventos que acontecerão.
Link de acesso ao repositório do GitHub https://github.com/Dmendesr/EntreTimePucMg 
Para testar o código será necessário baixar o código na máquina e rodar no VSC(Visual Studio Code) com o npm start. Após dar o 'start', App deverá ser aberto no Expo Go, que deverá ser baixado no celular e código QR lido. Ou pelo Android Studio. Mas antes disso, será necessário seguir os passos abaixo.
Para que a API fake funcione, quem estiver testando deverá dar o comando >json-server --watch db.json
Em seguida >lt --port 3000   , para ter um url localtunnel.
Quando tiver o url disponibilizado, após o comando >lt --port 3000  , clicar no link para verificar se ele funciona. 
Quando página for aberta buscar por 1. If you're running localtunnel on a local computer, go to this link in your browser: https://ipv4.icanhazip.com e clicar nesse link  https://ipv4.icanhazip.com que dará o IP público. Colocar esse número de IP no Endpoint IP: para rodar o json Server.
Agora é hora de testar pelo Expo Go ou Android Studio.

>Print do código db.json, onde os eventos foram incluídos -
![Inclusão pelo db json no VSC](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/98750413/1169c4e0-6d14-4b99-9611-d283ec568395)

>Print da tela do App, mostrando os eventos que foram incluídos no jb.json -
>
![Tela App eventos incluídos](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/98750413/cf43ce4a-bed8-41ec-b8fb-823550a82f74)

Com o link disponibilizado pelo localtunnel 'https://nine-wombats-cheat.loca.lt/eventos' é possível verificar os eventos no navegador
>
![crud no navegador](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/98750413/1c4f016d-ffb9-404f-9866-dd6879499956)

Excluindo Evento, Expo Go
![Excluindo evento pelo Expo Go](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/98750413/4ceb9329-b45b-4cbe-91ec-a056118f9a54)

![Excluindo evento](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/98750413/31a896fd-d956-42e1-9deb-84302019ac03)

Exclusão com Commit no json Server

[db.json - EntreTimePucMg - Visual Studio Code 2023-11-19 18-30-47.zip](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/files/13404683/db.json.-.EntreTimePucMg.-.Visual.Studio.Code.2023-11-19.18-30-47.zip)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
