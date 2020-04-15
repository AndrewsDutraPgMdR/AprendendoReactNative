import React, {Component} from 'react';
import {Text, View,StyleSheet} from 'react-native';


class Pessoas extends Component{
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

const styles = StyleSheet.create({
    container:{
        flex: 1,
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

export default Pessoas;
