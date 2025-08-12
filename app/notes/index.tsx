import { useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const NotesScreen = () => { 
    const [notes, setNotes] = useState([{ id: 1, content: "Sample Note 1" }, { id: 2, content: "Sample Note 2" }, { id: 3, content: "Sample Note 3" }]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] = useState("");

    return (
    <View style={styles.container}>
      <Text>Notes Screen</Text>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteText}>{item.content}</Text>
          </View>
        )} />
        <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.addButtonText}> + Add Note</Text>
        </TouchableOpacity>
          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}></Text>
                        <TextInput style={styles.input} placeholder="Enter note..." placeholderTextColor="gray" value={newNote} onChangeText={setNewNote}/>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.cancelButton} onPress={() => {setModalVisible(false)}}>
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',

  },
  noteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    marginVertical: 5,
    width: '100%',
  },
  noteText: {
    fontSize: 16,
    color: 'black',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 15,
    backgroundColor: 'blue',
    borderRadius: 8,
    alignItems: 'center',
    width: '100%'
  },
  addButtonText:{
    color:'white',
    fontSize: 16,
    fontWeight: 'bold',
     backgroundColor: 'blue',
  },
  modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(167, 159, 159, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },
    input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#333',
  },
});

export default NotesScreen;