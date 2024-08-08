import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="grey" />
      <TextInput
        style={styles.searchInput}
        placeholder="Search here"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 0.5,
    margin: 10,
    borderRadius: 10,
    paddingLeft: 10,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 2,
    margin: 10,
  },
});

export default SearchBar;
