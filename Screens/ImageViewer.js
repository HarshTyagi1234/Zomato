import React from "react";
import {
  Modal,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
} from "react-native";

const ImageViewer = ({ visible, imageUrl, onDismiss }) => {
  return (
    <Modal
    visible={visible}
    transparent={true}
    onRequestClose={onDismiss}
    animationType="slide"
  >
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <TouchableOpacity style={styles.doneButton} onPress={onDismiss}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </Modal>
);
    // <Modal
    //   visible={visible}
    //   transparent={true}
    //   onRequestClose={onDismiss}
    //   animationType="slide"
    // >
    //   <SafeAreaView style={styles.container}>
    //     <TouchableOpacity  onPress={onDismiss}>
    //       <View style={styles.doneButton}>
    //         <Text style={styles.doneText}>Done</Text>
    //       </View>
    //     </TouchableOpacity>
    //     <View style={styles.imageContainer}>
    //       <Image source={{ uri: imageUrl }} style={styles.image} resizeMode= 'cover' />
    //     </View>
    //   </SafeAreaView>
    // </Modal>
  //);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    //justifyContent: 'center',
    //alignItems: 'center', 
   },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  doneButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 10,
    paddingVertical:8,
    borderRadius: 5,
    shadowColor:'black',
    shadowOpacity:0.3,
    shadowOffset:{width:0,height:0.4}
  },
  doneButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default ImageViewer;
