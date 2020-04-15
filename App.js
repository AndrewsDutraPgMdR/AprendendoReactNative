import React, {Component} from 'react';
import {View,Text, StyleSheet,FlatList} from 'react-native';
import Pessoas from './src/Pessoas';
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
        renderItem={ ({item}) => <Pessoas data={item}/>} //renderiza a lista
        
        
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,    
  }
});

export default App;

