import { Formik } from 'formik';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput ,Image,FlatList,TouchableOpacity, SafeAreaView } from 'react-native';



export default function Forms(navigation) {
    const [marca, setMarca] = useState('');
    const [garantia, setGarantia] = useState('');
    const [problema, setProblema] = useState('');
    const [informacoeasAdicionais, setInformacoeasAdicionais] = useState('');

    return(
        <Formik>
        <View>
             <View>
                 <Text>Computar Desktop </Text>
                    <Text style={{ marginTop: 20 }}>Qual marca/modelo produto?</Text>
                    <View style={styles.input}>
                      <TextInput
                        style={{ marginLeft: 10 }}
                        value={marca}
                        onChange ={ e => setMarca(e.target.value)}
                    
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={{ marginTop: 20 }}>O problema está coberto de garantia ?</Text>
                    <View style={styles.input}>
                      <TextInput
                        style={{ marginLeft: 10 }}
                        value={garantia}
                        onChange ={ e => setGarantia(e.target.value)}
                        
                    
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={{ marginTop: 20 }}>Qual problema encontra ?</Text>
                    <View style={styles.input}>
                      <TextInput
                        style={{ marginLeft: 10 }}
                        value={problema}
                        onChange ={ e => setProblema(e.target.value)}                       
                    
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={{ marginTop: 20 }}>informações adicionais</Text>
                    <View style={styles.input}>
                      <TextInput
                        style={{ marginLeft: 10 }}
                        value={informacoeasAdicionais}
                        onChange ={ e => setInformacoeasAdicionais(e.target.value)}
                                            
                      />
                    </View>
                  </View>
                 
        </View>
        </Formik>
        



       

        );
      
       

       

}

const styles = StyleSheet.create({

    input: {
        borderWidth: 1,
        width: "100%",
        height: 24,
        borderRadius: 15,
        justifyContent: "center",
      },

          });
