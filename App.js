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

class App extends React.Component {

  // Setup the state
  state = {image: IMAGES['black_joker']};

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
    card = (this.cards[Math.floor(Math.random()*this.cards.length)]);
    this.setState({
      image: IMAGES[card]
    });
  }
  
  render() {    

    return (
      <View style={styles.container}>
        <Image style={styles.card} source={this.state.image}/>
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

const IMAGES = {
  ace_of_spades: require('./images/ace_of_spades.png'),
  two_of_spades: require('./images/two_of_spades.png'),
  three_of_spades: require('./images/three_of_spades.png'),
  four_of_spades: require('./images/four_of_spades.png'),
  five_of_spades: require('./images/five_of_spades.png'),
  six_of_spades: require('./images/six_of_spades.png'),
  seven_of_spades: require('./images/seven_of_spades.png'),
  eight_of_spades: require('./images/eight_of_spades.png'),
  nine_of_spades: require('./images/nine_of_spades.png'),
  ten_of_spades: require('./images/ten_of_spades.png'),
  jack_of_spades: require('./images/jack_of_spades.png'),
  queen_of_spades: require('./images/queen_of_spades.png'),
  king_of_spades: require('./images/king_of_spades.png'),
  ace_of_hearts: require('./images/ace_of_hearts.png'),
  two_of_hearts: require('./images/two_of_hearts.png'),
  three_of_hearts: require('./images/three_of_hearts.png'),
  four_of_hearts: require('./images/four_of_hearts.png'),
  five_of_hearts: require('./images/five_of_hearts.png'),
  six_of_hearts: require('./images/six_of_hearts.png'),
  seven_of_hearts: require('./images/seven_of_hearts.png'),
  eight_of_hearts: require('./images/eight_of_hearts.png'),
  nine_of_hearts: require('./images/nine_of_hearts.png'),
  ten_of_hearts: require('./images/ten_of_hearts.png'),
  jack_of_hearts: require('./images/jack_of_hearts.png'),
  queen_of_hearts: require('./images/queen_of_hearts.png'),
  king_of_hearts: require('./images/king_of_hearts.png'),
  ace_of_clubs: require('./images/ace_of_clubs.png'),
  two_of_clubs: require('./images/two_of_clubs.png'),
  three_of_clubs: require('./images/three_of_clubs.png'),
  four_of_clubs: require('./images/four_of_clubs.png'),
  five_of_clubs: require('./images/five_of_clubs.png'),
  six_of_clubs: require('./images/six_of_clubs.png'),
  seven_of_clubs: require('./images/seven_of_clubs.png'),
  eight_of_clubs: require('./images/eight_of_clubs.png'),
  nine_of_clubs: require('./images/nine_of_clubs.png'),
  ten_of_clubs: require('./images/ten_of_clubs.png'),
  jack_of_clubs: require('./images/jack_of_clubs.png'),
  queen_of_clubs: require('./images/queen_of_clubs.png'),
  king_of_clubs: require('./images/king_of_clubs.png'),
  ace_of_diamonds: require('./images/ace_of_diamonds.png'),
  two_of_diamonds: require('./images/two_of_diamonds.png'),
  three_of_diamonds: require('./images/three_of_diamonds.png'),
  four_of_diamonds: require('./images/four_of_diamonds.png'),
  five_of_diamonds: require('./images/five_of_diamonds.png'),
  six_of_diamonds: require('./images/six_of_diamonds.png'),
  seven_of_diamonds: require('./images/seven_of_diamonds.png'),
  eight_of_diamonds: require('./images/eight_of_diamonds.png'),
  nine_of_diamonds: require('./images/nine_of_diamonds.png'),
  ten_of_diamonds: require('./images/ten_of_diamonds.png'),
  jack_of_diamonds: require('./images/jack_of_diamonds.png'),
  queen_of_diamonds: require('./images/queen_of_diamonds.png'),
  king_of_diamonds: require('./images/king_of_diamonds.png'),
  black_joker: require('./images/black_joker.png')
}

export default App;
