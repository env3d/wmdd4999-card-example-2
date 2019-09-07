
import React from 'react';
import {View, Image, Text} from 'react-native';

// Custom CardView component.  It accepts a property
// named "card".  We move all the card display logic
// here.
//
// We use it like this:  <CardView card="ace_of_spades" />
//
export default class CardView extends React.Component {
  render() {
    return (
      <Image style={this.props.style} source={IMAGES[this.props.card]}/>
    )
  }
}


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


