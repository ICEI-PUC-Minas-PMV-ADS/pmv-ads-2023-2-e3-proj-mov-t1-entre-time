import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, Alert } from 'react-native';
import { Appbar, TextInput, Button, RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { register } from '../services/auth.services';

const Register = () => {
  const navigation = useNavigation();

  const [usuarios, setUsuarios] = useState([]);
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState(false);

  const handleRegister = () => {
    register({
      nome: nome,
      email: email,
      password: senha,
      confirmarSenha: confirmarSenha,
      tipoUsuario: tipoUsuario,
    }).then(res => {
        console.log(res)

        if(res){
          Alert.alert('Usuário cadastrado com sucesso!', [{text:"OK", onPress: () => navigation.goBack()}])
        } else {
          Alert.alert('Atenção', 'Usuário não cadastrado! Tente novamente mais tarde =D')
        }
    })
  }

  const generateGuid = () => {
    const S4 = () =>
      (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    return `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
  };

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
      alert('As senhas não coincidem.');
      return;
    }

    const novoUsuario = {
      id: generateGuid(),
      nome,
      email,
      senha,
      tipoUsuario,
    };

    setUsuarios([...usuarios, novoUsuario]);
    limparFormulario();
  };

  const limparFormulario = () => {
    setId('');
    setNome('');
    setEmail('');
    setSenha('');
    setConfirmarSenha('');
    setTipoUsuario(false);
  };

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Cadastrar Novo Usuario" />
      </Appbar.Header>

      <TextInput
        label="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
        left={<TextInput.Icon name="account" />}
      />

      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        left={<TextInput.Icon name="email" />}
      />

      <TextInput
        label="Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        left={<TextInput.Icon name="key" />}
        secureTextEntry
      />

      <TextInput
        label="Confirmar Senha"
        value={confirmarSenha}
        onChangeText={(text) => setConfirmarSenha(text)}
        left={<TextInput.Icon name="key" />}
        secureTextEntry
      />

      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value={false}
            status={tipoUsuario === false ? 'checked' : 'unchecked'}
            onPress={() => setTipoUsuario(false)}
          />
          <Text>Consumidor</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value={true}
            status={tipoUsuario === true ? 'checked' : 'unchecked'}
            onPress={() => setTipoUsuario(true)}
          />
          <Text>Empreendedor</Text>
        </View>
      </View>

      <Button
        style={styles.button}
        mode="contained"
        title="Adicionar Usuário"
        onPress={handleRegister}>
        {' '}
        Criar Usuário
      </Button>

      <Button
        style={styles.button}
        mode="contained"
        title="Cancelar"
        onPress={() => navigation.goBack()}>
        {' '}
        Cancelar{' '}
      </Button>

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{`ID: ${item.id}, Nome: ${item.nome}, Email: ${item.email}, Tipo de Usuario: ${item.tipoUsuario}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 8,
  },
});

export default Register