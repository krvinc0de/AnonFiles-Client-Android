import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function App() {

  const uploadFile = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({})
      if (res.type === 'cancel') return;
      console.log(res.uri);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/anonlogo.png')}
        style={styles.imageLogo}
      />
      <View style={styles.containerUpload}>
        <Text style={styles.textPage}>Select file to upload</Text>
        {
          console.log('Hola mundo')
        }
        <TouchableOpacity style={styles.buttonFile}
          onPress={uploadFile}
        >
          <Text style={styles.textPage}>Select File</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: '20%'
  },
  containerUpload: {
    width: '100%',
    alignItems: 'center'
  },
  textPage: {
    color: '#fff'
  },
  imageLogo: {
    width: '80%',
    height: 100,
    marginBottom: 20
  },
  buttonFile: {
    width: '60%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 20,
    marginTop: 20
  }
});
