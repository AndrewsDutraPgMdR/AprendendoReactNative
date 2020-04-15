import React, {Component} from 'react';
import {View,Text, StyleSheet,FlatList} from 'react-native';

class App extends Component{
  constructor (props){
    super(props);
    this.state = {
      feed:[
        {id: '1',nome: 'Andrews', idade: 20,email:'andrews@gmail.com'},
        {id: '2',nome: 'Lucas', idade: 23,email:'lucas@gmail.com'},
        {id: '3',nome: 'Renato', idade: 24,email:'renato@gmail.com'},
        {id: '4',nome: 'Paulo', idade: 14,email:'paulo@gmail.com'},
        {id: '5',nome: 'Jose', idade: 10,email:'jose@gmail.com'}
      ]
    };
  }

  render(){
    return(
      <View style ={styles.container}>
        <FlatList
        data={this.state.feed} // lista que vai receber
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Pessoa data={item}/>} //renderiza a lista
        
        
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  AreaPessoa:{
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15
  },
  TextoPessoa:{
    color: '#FFF',
    fontSize: 20
  }
});

export default App;

class Pessoa extends Component{
  render(){
    return(
      <View style={styles.AreaPessoa}>
        <Text style={styles.TextoPessoa}> {this.props.data.nome}</Text>
        <Text style={styles.TextoPessoa}> {this.props.data.idade}</Text>
        <Text style={styles.TextoPessoa}> {this.props.data.email}</Text>
      </View>
    );
  }
}