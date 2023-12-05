import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Appbar, List, Searchbar, FAB as Fab } from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { getEventos } from '../services/Eventos.Services';

const Eventos = () => {
  const navigation = useNavigation();
  const [eventos, setEventos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEventos, setFilteredEventos] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    getEventos().then(dados => {
      console.log(dados);
      setFilteredEventos(dados);
    });
  }, [isFocused]);

  const handleSearch = query => {
  setSearchQuery(query);
  const filteredData = eventos.filter(
    evento =>
      // (evento.nomeEvento && evento.nomeEvento.toLowerCase().includes(query.toLowerCase())) ||
      // (evento.nomeLocal && evento.nomeLocal.toLowerCase().includes(query.toLowerCase()))
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
