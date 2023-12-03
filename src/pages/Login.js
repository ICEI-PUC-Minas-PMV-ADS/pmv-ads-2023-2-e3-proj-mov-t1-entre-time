import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { TextInput, Button, Headline } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import Container from '../components/Container'
import Body from '../components/Body'
import Input from '../components/Input'
import { useUser } from '../contexts/UserContext'

const Login = () => {   
    const navigation = useNavigation()
    const {setSigned} = useUser()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <Container>
          <Headline style={styles.textHeader}> Login </Headline>
            <Body>              

              <TextInput
                  label="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  left={<TextInput.Icon name="account" />}
              />

              <TextInput
                  label="Senha"
                  value={senha}
                  onChangeText={(text) => setSenha(text)}
                  left={<TextInput.Icon name="key" />}
                  secureTextEntry
              />
              <Button mode="contained" onPress={() => setSigned(true)}>
                  LOGIN
              </Button>
              <Button mode="outline" onPress={() => navigation.navigate('Register')}>
                  Registrar
              </Button>
            </Body>
        </Container>
    )
}

const styles = StyleSheet.create({
  textHeader:{
    textAlign:'center'
  }
})

export default Login