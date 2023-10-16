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

## Crud Eventos
### Responsável: Daniel Mendes Rufino Silva
Revendo o microfundamento "Desenvolvimento de Aplicações Móveis", utilizando, como instruído pelo Professor Kleber Souza, o https://snack.expo.dev/ 
está em desenvolvimento o CRUD de eventos. 

Por hora foi gerado o seguinte código para inclusão de eventos:
```
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton, Text, TextInput, Button, Appbar } from 'react-native-paper';
import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';

import { useNavigation } from '@react-navigation/native';

const InsertEvento = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};
  
  const [tipo, setTipo] = useState('esporte'); 
  //const [criador, setCriador] = useState('');
  const [nomeEvento, setNomeEvento] = useState(null);
  const [nomeLocal, setNomeLocal] = useState(null);
  const [endereco, setEndereco] = useState(null);
  const [bairro, setBairro] = useState(null);
  const [cidade, setCidade] = useState(null);
  const [estado, setEstado] = useState(null);
  const [dataInicioEvento, setDataInicioEvento] = useState(null);
  const [horaInicioEvento, setHoraInicioEvento] = useState(null);
  const [valorEntrada, setValorEntrada] = useState(null);
  const [dataFimEvento, setDataFimEvento] = useState(null);
 
  useEffect(()=> {
    if(item){
      setTipo(item.tipo == 0? 'esporte': 'show');
      setNomeEvento(item.nomeEvento);
      setNomeLocal(item.nomeLocal);
      setEndereco(item.endereco);
      setBairro(item.bairro);
      setCidade(item.cidade);
      setEstado(item.estado);
      setDataInicioEvento(item.dataInicioEvento);
      setHoraInicioEvento(item.horaInicioEvento);
      setValorEntrada(item.valorEntrada);
      setDataFimEvento(item.dataFimEvento);
      
    }
  }, [item]);

  const handleSalvar = () => {
    console.log('Salvar');
  };
  const handleExcluir = () => {
    console.log('Excluir');
  };

  return (
    <Container>
      <Header title={'Inserir Evento'} goBack={() => navigation.goBack()}>
        <Appbar.Action icon="check-bold" onPress={handleSalvar} />
        {
          item && 
          <Appbar.Action icon="trash-can" onPress={handleExcluir} />
        }
        
      </Header>

      <Body>
        <View style={styles.containerRadio}>
          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              status={tipo === 'esporte' ? 'checked' : 'unchecked'}
              onPress={() => setTipo('esporte')}
            />
            <Text>Esportes</Text>
          </View>
          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              status={tipo === 'expo' ? 'checked' : 'unchecked'}
              onPress={() => setTipo('expo')}
            />
            <Text>Exposicao/Feira</Text>
          </View>
          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              status={tipo === 'game' ? 'checked' : 'unchecked'}
              onPress={() => setTipo('game')}
            />
            <Text>Games</Text>
          </View>
          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              status={tipo === 'gastronomia' ? 'checked' : 'unchecked'}
              onPress={() => setTipo('gastronomia')}
            />
            <Text>Gastronomia/Bebidas</Text>
          </View>
          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              status={tipo === 'vivo' ? 'checked' : 'unchecked'}
              onPress={() => setTipo('vivo')}
            />
            <Text>Musica ao vivo</Text>
          </View>
          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              status={tipo === 'eletronica' ? 'checked' : 'unchecked'}
              onPress={() => setTipo('eletronica')}
            />
            <Text>Musica Eletronica</Text>
          </View>
          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              status={tipo === 'show' ? 'checked' : 'unchecked'}
              onPress={() => setTipo('show')}
            />
            <Text>Shows</Text>
          </View>
        </View>

        <Input
          label="Nome evento"
          value={nomeEvento}
          onChangeText={(text) => setNomeEvento(text)}
          left={<TextInput.Icon icon="calendar-star" />}
        />

        <Input
          label="Local"
          value={nomeLocal}
          onChangeText={(text) => setNomeLocal(text)}
          left={<TextInput.Icon icon="calendar-star" />}
        />

        <Input
          label="Endereço"
          value={endereco}
          onChangeText={(text) => setEndereco(text)}
          left={<TextInput.Icon icon="calendar-star" />}
        />

        <Input
          label="Bairro"
          value={bairro}
          onChangeText={(text) => setBairro(text)}
          left={<TextInput.Icon icon="calendar-star" />}
        />

        <Input
          label="Cidade"
          value={cidade}
          onChangeText={(text) => setCidade(text)}
          left={<TextInput.Icon icon="calendar-star" />}
        />

         <Input
          label="Estado"
          value={estado}
          onChangeText={(text) => setEstado(text)}
          left={<TextInput.Icon icon="calendar-star" />}
        />

        <Input
          label="Data evento"
          value={dataInicioEvento}
          onChangeText={(text) => setDataInicioEvento(text)}
          left={<TextInput.Icon icon="calendar-star" />}
        />

        <Input
          label="Horário evento"
          value={horaInicioEvento}
          onChangeText={(text) => setHoraInicioEvento(text)}
          left={<TextInput.Icon icon="clock-time-nine-outline" />}
        />
        <Input
          label="Valor entrada"
          value={valorEntrada}
          onChangeText={(text) => setValorEntrada(text)}
          left={<TextInput.Icon name="currency-brl" />}
        />
        <Input
          label="Data fim evento"
          value={dataFimEvento}
          onChangeText={(text) => setDataFimEvento(text)}
          left={<TextInput.Icon icon="calendar-lock" />}
        />

        <Button
          icon="check-bold"
          mode="contained"
          style={styles.button}
          onPress={handleSalvar}>
          Salvar
        </Button>

        {item && (
          <Button
            icon="trash-can"
            mode="contained"
            color={"red"}
            style={styles.button}
            onPress={handleExcluir}>
            Excluir
          </Button>
        )}
      </Body>
    </Container>
  );
};
const styles = StyleSheet.create({
  containerRadio: {
    flexDirection: 'column',
  },
  containerRadioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 5,
  },
});

export default InsertEvento;

```
Por hora, foi gerado o seguinte código para listar eventos:
```
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { List, Text, FAB, FlatList } from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';
import { getEventos } from '../services/EventosServicesDB';

import { useNavigation } from '@react-navigation/native';

const ListaEventos = () => {
  const navigation = useNavigation();
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    getEventos().then((dados) => {
      setEventos(dados);
    });
  }, []);
  const renderItem = ({ item }) => (
    <List.Item
      title={item.nomeEvento + '\n' + item.nomeLocal}
      description={
        'Endereço: \n' +
        item.endereco +
        '\n' +
        item.bairro +
        '\n' +
        item.cidade +
        '\n' +
        item.estado
      }
      titleNumberOfLines={8}
      descriptionNumberOfLines={6}
      left={(props) => (
        <List.Icon {...props} color={'blue'} icon="human-scooter" />
      )}
      right={(props) => (
        <Text {...props} style={{ alignSelf: 'center' }}>
                             {' '}
          {'Data do evento\n ' +
            item.dataInicioEvento +
            '\n Hora início\n ' +
            item.horaInicioEvento +
            '\n Investimento\n ' +
            'R$' +
            item.valorEntrada +
            '\nData Fim evento\n ' +
            item.dataFimEvento}{' '}
                 {' '}
        </Text>
      )}
      onPress={() => navigation.navigate('Inserir evento', { item })}
    />
  );

  return (
    <Container>
            <Header title={'Lista de Eventos'} />     {' '}
      <Body>
             {' '}
        <FlatList
          data={eventos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
                   {' '}
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => navigation.navigate('Inserir Evento')}
        />
             {' '}
      </Body>
         {' '}
    </Container>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default ListaEventos;
```
Por hora, foi gerado o seguinte código para criar o banco de dados SQLite:
```
import * as SQLite from 'expo-sqlite';

export const Database = {
  getConnection: () => {
    const db = SQLite.openDatabase('evento_manager.db');

    db.transaction((tx) => {
      tx.executeSql(
        'create table if not exists listaEventos (id integer primary key not null, tipo int not null, nomeEvento text not null, nomeLocal text not null, endereco text not null, bairro text not null, cidade text not null, estado text not null, dataIncioEvento text not null, horaIncioEvento text not null, valorEntrada real not null, dataFimEvento text not null)'
      );
    });

    const ExecuteQuery = (sql, params = []) =>
      new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(
            sql,
            params,
            (_trans, results) => {
              resolve(results);
            },
            (error) => {
              reject(error);
            }
          );
        });
      });

    return ExecuteQuery;
  },
};

export default Database;
```
Por hora, foi gerado o seguinte código para criar 'insert', 'update' e 'delete' dados do banco de dados SQLite:
```
import Database from './DbServices';

const DB_EXEC = Database.getConnection();

export const getListaEventos = async () => {
  let results = await DB_EXEC(`select * from listaEventos`);
  return results.rows._array; 
}
export const insertEvento = async (param) => {
  let results = await DB_EXEC(`insert into listaEventos(tipo, nomeEvento, nomeLocal, endereco, bairro, cidade, estado, dataIncioEvento, horaIncioEvento, valorEntrada, dataFimEvento) 
  values(?,?,?,?,?,?,?,?,?,?,?)`, [param.tipo, param.nomeEvento, param.nomeLocal, 
param.endereco, param.bairro, param.cidade, param.estado, param.dataIncioEvento, 
param.horaIncioEvento, param.valorEntrada, param.dataFimEvento]);
  //console.log(results);
  return results.rowsAffected; 
}

export const updateEvento = async (param) => {
  let results = await DB_EXEC(`update listaEventos set tipo=?, nomeEvento=?, nomeLocal=?, endereco=?, 
bairro=?, cidade=?, estado=?, dataIncioEvento=?, horaIncioEvento=?, valorEntrada=?, dataFimEvento=? where id=?`, [param.tipo, param.nomeEvento, param.nomeLocal, 
param.endereco, param.bairro, param.cidade, param.estado, param.dataIncioEvento, 
param.horaIncioEvento, param.valorEntrada, param.dataFimEvento, param.id]);
  return results.rowsAffected; 
}

export const deleteEvento = async (id) => {
  let results = await DB_EXEC(`delete from listaEventos where id=?`, [id]);
  return results.rowsAffected; 
}
```
Código está em desenvolvimento e no momento está apresentando um erro.

![undefined is not a function](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-entre-time/assets/98750413/9e35333c-cef0-4224-bb47-12f286cd86c3)

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
