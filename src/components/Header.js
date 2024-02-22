import React from 'react';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import icon from '../../assets/imgs/icon.png';
import { Gravatar } from 'react-native-gravatar';

export default function Header({ email, name }) {
  const userName = name || 'Anonymous';
  const userGravatar = email ? (
    <Gravatar options={{ email: email, secure: true }} style={styles.avatar} />
  ) : null;

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={icon} style={styles.image} />
        <Text style={styles.title}>Lambe Lambe</Text>
      </View>
      <View style={styles.userContainer}>
        <Text style={styles.user}>{userName}</Text>
        {userGravatar}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#BBB',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  title: {
    color: '#000',
    fontFamily: 'shelter',
    height: 30,
    fontSize: 28,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    fontSize: 10,
    color: '#888',
  },
  avatar: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});
