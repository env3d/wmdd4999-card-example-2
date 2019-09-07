/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button
} from 'react-native';

import CardView from './CardView';

class App extends React.Component {

  // Setup the state
  state = {card: 'black_joker'};

  // Init the cards array of names of all cards
  constructor() {
    super();
    this.SUITS = [ "spades", "hearts", "clubs", "diamonds" ];
    this.VALUES = [
      "ace", "two", "three", "four",
      "five", "six", "seven", "eight",
      "nine", "ten", "jack", "queen", "king"
    ];

    this.cards = [];

    this.SUITS.forEach( suit => {
      this.VALUES.forEach( val => {
        this.cards.push(`${val}_of_${suit}`);
      })
    });
  }

  // Draw a card by changing the state
  drawCard() {
    this.setState({
      card: this.cards[Math.floor(Math.random()*this.cards.length)]
    });
  }
  
  render() {    
    return (
      <View style={styles.container}>
        <CardView style={styles.card} card={this.state.card}/>
        <Button style={styles.button}
                onPress={this.drawCard.bind(this)}
                title={'Draw Card'}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: '50%',
    height: '50%'
  },
  button: {
    width: '50',
  }
});

export default App;
