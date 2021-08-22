import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  );

  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 16,}}>{blogPost.title}</Text>
      <Text style={{textAlign: 'justify', color: '#575656', marginTop: 6}}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons style={{padding: 10}} name="pencil" size={35} color="#2196F3" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 10
  },
});

export default ShowScreen;
