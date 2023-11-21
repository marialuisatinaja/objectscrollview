import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Alert } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-web';
import guest from './src/Guest';
import React, {useState} from 'react';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const show = (guestss) =>{
    setModalVisible(true);
    setSelectedUser(guestss);
  };

  return (
    <View style={styles.container}>

    <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                {selectedUser &&(
                  <Text style={{fontSize: 28, fontWeight: '500', padding: 15}}>Hello! {selectedUser.nick}</Text>
                )}
                {selectedUser && (
                  <Text style={{fontSize: 28, fontWeight: '100'}}>{selectedUser.name.fname} {selectedUser.name.lname}.
                  </Text>
                )}
                {selectedUser && (
                  <Text style={{fontWeight: '100', fontSize: 22}}>{selectedUser.course}</Text>
                )}

                <TouchableOpacity onPress={()=> setModalVisible(false)}>
                  <Text style={{marginTop: 25, fontSize: 20, color: '#776B5D'}}>Hide</Text>
                </TouchableOpacity>

            </View>
          </View>
        </Modal>

      <Text style={styles.txt}>SCROLLVIEW</Text>
      {guest.map ((guestss)=>{
        return(
          <View>
            <ScrollView>
              <TouchableOpacity onPress={()=> show(guestss)} style={styles.border}>
                <Text style={styles.txt1}>{guestss.nick}</Text>
              </TouchableOpacity>

            </ScrollView>

          </View>
        )
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#FF6C22',
    marginLeft: 10

  },
  txt1: {
    fontWeight: '500',
    fontSize: 25,
    marginLeft: 15,
    margin: 10
  },
  border: {
    borderWidth: 1,
    borderColor: '#A7D397'

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 4,
    elevation: 5,
  },
});
