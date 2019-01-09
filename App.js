/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Todolist from './Todolist';


export default class App extends Component {
  state = {
    newTodo: '',
    todos: [],
  }

  onChangeText(newTodo){
    this.setState({ newTodo });
  }

  onPressAdd() {
    const { newTodo } = this.state;
    this.setState({
      newTodo: '',
      todos: [newTodo, ...this.state.todos],
    });
  }
  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.newTodo}
          style={styles.form}
          onChangeText={text => this.onChangeText(text)}
        />
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => this.onPressAdd()}
        >
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
        <Todolist todos={this.state.todos}></Todolist>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:40,
    //flexDirection: 'row',
    //flexDirection: 'column',
    //-reverse',
  },
  form: {
    backgroundColor: '#EEE',
    padding:10,
  },
  addButton: {
    backgroundColor: '#333',
    padding:14,
    borderRadius: 4,
    marginTop: 10,
  },
  addButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',

  },
  box1:{
    height:100,
    backgroundColor: '#000',
  },
  box2:{
    flex:1,
    height:100,
    backgroundColor: '#333',
  },
  box3:{
    flex:1,
    height:100,
    backgroundColor: '#666',
  },
});
