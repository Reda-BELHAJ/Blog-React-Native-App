import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 10
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#2196F3',
    marginBottom: 15,
    padding: 10
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color: '#0d47a1'
  }
});

export default BlogPostForm;
