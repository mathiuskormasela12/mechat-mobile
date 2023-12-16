// ===== Home
// import all modules
import React from 'react';
import {useWindowDimensions, StyleSheet, View} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
// import all screens
import Chats from './Chats';
import Contacts from './Contacts';
import { Header } from '../components';
import {SafeAreaView} from '../components';

export default function Home() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'chats', title: 'Chats'},
    {key: 'contacts', title: 'Friends'},
  ]);

  const renderScene = SceneMap({
    chats: Chats,
    contacts: Contacts,
  });

  return (
    <SafeAreaView>
      <Header />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={styles.nav}
            inactiveColor="#AAAAAA"
            activeColor="#5F2EEA"
            indicatorStyle={styles.indicatorStyle}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: 'white',
  },
  indicatorStyle: {
    backgroundColor: '#5F2EEA',
  },
});
