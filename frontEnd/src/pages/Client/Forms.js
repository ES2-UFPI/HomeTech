import { Formik } from 'formik';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput ,Image,FlatList,TouchableOpacity, SafeAreaView ,Button} from 'react-native';



export default function Forms(navigation) {
    const [marca, setMarca] = useState('');
    const [garantia, setGarantia] = useState('');
    const [problema, setProblema] = useState('');
    const [informacoeasAdicionais, setInformacoeasAdicionais] = useState('');

    return(
      
        <Formik>

   <SafeAreaView style={styles.container}>
     <View style={styles.containerTitle}>
   <Text style={styles.Title}>
        Formulário de serviço
      </Text>

     
      </View>
        <View style={styles.inputWrapper} >
             <View>
                 
                    <Text style={styles.fieldName}>Qual marca/modelo produto?</Text>
                    <View style={styles.input}>
                      <TextInput
                        style={styles.fieldText}
                        value={marca}
                        onChange ={ e => setMarca(e.target.value)}
                    
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={styles.fieldName}>Qual problema encontra ?</Text>
                    <View style={styles.input}>
                      <TextInput
                        style={styles.fieldText}
                        value={garantia}
                        onChange ={ e => setGarantia(e.target.value)}
                        
                    
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={styles.fieldName}>O problema está coberto de garantia ?</Text>
                    <View style={styles.input}>
                      <TextInput
                        style={styles.fieldText}
                        value={problema}
                        onChange ={ e => setProblema(e.target.value)}                       
                    
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={styles.fieldName}>Informações adicionais:</Text>
                    <View style={styles.input}>
                      <TextInput
                        style={styles.fieldText}
                        value={informacoeasAdicionais}
                        onChange ={ e => setInformacoeasAdicionais(e.target.value)}
                                            
                      />
                    </View>
                  </View>
                  <View style={styles.buttonContainer}>
                  <Button 
                  color="#3B5998"
        title="Enviar"
        onPress={() => alert('Enviado')}
      />
      </View>
                 
        </View>
        </SafeAreaView>
        </Formik>
        



       

        );
      
       

       

}

const styles = StyleSheet.create({
  containerTitle:{
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B5998',
  },
  Title:{

    color: '#FFF',
    fontSize: 21,
    fontWeight: 'bold',
  },

  subTitle:{

fontSize: 15,
color:"#000000",
lineHeight:25,
  },



  container: {
    flex: 1,
    
  },
    input: {
        borderWidth: 1,
        width: "100%",
        height: 24,
        borderRadius: 15,
        justifyContent: "center",
      },
     
      inputWrapper: {
        width: "85%",
        alignSelf: "center",
        
      },
      
      input: {
        borderWidth: 1,
        width: "100%",
        height: 24,
        borderRadius: 6,
        justifyContent: "center",
      },

      fieldName: {
       marginTop: 30,
       fontFamily: 'sans-serif-medium',
       fontWeight: 'bold',
       fontSize:15,

      },

      fieldText: {
     flex: 1,

      },

      buttonContainer:{
        marginTop: 20,

      },
    

          });
