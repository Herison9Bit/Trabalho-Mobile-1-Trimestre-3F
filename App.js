import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDados(json);
      });
  }, []);

  const renderizarContato = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.circulo}>
        <Text style={styles.inicial}>{item.name.charAt(0)}</Text>
      </View>
      <View style={styles.textos}>
        <Text style={styles.nome}>{item.name}</Text>
        <Text style={styles.subtitulo}>{item.email.toLowerCase()}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tituloHeader}>Contatos</Text>
      </View>

      <FlatList
        data={dados}
        renderItem={renderizarContato}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.divisor} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tituloHeader: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  circulo: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inicial: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textos: {
    marginLeft: 15,
  },
  nome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  subtitulo: {
    fontSize: 13,
    color: '#888',
  },
  divisor: {
    height: 1,
    backgroundColor: '#eee',
    marginLeft: 75,
  },
});
