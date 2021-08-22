import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getAllBlogPost } = useContext(Context);

  useEffect( () => {
    getAllBlogPost()

    const listener = navigation.addListener('didFocus', () => {
      getAllBlogPost()
    })

    return () => {
      listener.remove()
    }
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather style={{padding: 10}} name="plus" size={30} color="#2196F3" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#2196F3'
  },
  title: {
    fontSize: 18,
    color: 'white'
  },
  icon: {
    fontSize: 24,
    color: 'white'
  },
});

export default IndexScreen;
