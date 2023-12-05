import * as React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { List } from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';
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