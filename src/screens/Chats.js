// ===== Chats
// import all modules
import React, {Component, Fragment} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

// import all components
import {ChatList} from '../components';

import profile from '../assets/img/profile.png';
import wira from '../assets/img/wira.jpeg';
import fauzi from '../assets/img/fauzi.jpeg';
import mathius from '../assets/img/mathius.jpeg';

class Chats extends Component {
  constructor() {
    super();
    this.state = {
      messages: [
        {
          name: 'Mathius',
          message: 'Hai, lgi ngapain ?',
          photo: mathius
        },
        {
          name: 'Fauzi',
          message: 'Hai, lgi ngapain ?',
          photo: fauzi
        },
        {
          name: 'Wira',
          message: 'Hai, lgi ngapain ?',
          photo: wira,
        },
        {
          name: 'Tzuyu',
          message: 'Hai, lgi ngapain ?',
          photo: profile
        },
        {
          name: 'Momo',
          message: 'Hai, lgi ngapain ?',
          photo: profile
        },
        {
          name: 'Jihyo',
          message: 'Hai, lgi ngapain ?',
          photo: profile
        },
        {
          name: 'Dahyun',
          message: 'Kamu klo nyebut nama...',
          photo: profile
        },
      ],
    };
  }

  render() {
    return (
      <Fragment>
        <View style={styles.hero}>
          <FlatList
            data={this.state.messages}
            keyExtractor={(item, index) => String(index)}
            renderItem={({item}) => (
              <ChatList
                picture={item.photo}
                name={item.name}
                message={item.message}
              />
            )}
          />
        </View>
      </Fragment>
    );
  }
}

export default Chats;

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  },
  hero: {
    flex: 1,
    backgroundColor: 'white',
  },
});
