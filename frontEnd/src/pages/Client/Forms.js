import { Formik } from 'formik';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text,FlatList, View,TextInput ,Image,ScrollView,TouchableOpacity, SafeAreaView ,Button} from 'react-native';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';


import {
    Feather

} from "react-native-vector-icons";



export default function Forms(navigation) {
    const [marca, setMarca] = useState('');
    const [garantia, setGarantia] = useState('');
    const [problema, setProblema] = useState('');
    const [informacoeasAdicionais, setInformacoeasAdicionais] = useState('');
    const [selectedYear,setSelectedYear] = useState(0);
    const [selectedMonth,setSelectedMonth] = useState(0);
    const [selectedDay,setSelectedDay] = useState(0);
    const [selectedHour,setSelectedHour] = useState(null);
    const [listDays, setListDays] = useState([]);
    const [listHours, setListHours] = useState([]);

    const months = [ 
      'janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
      
     ];
    
    
     const days = [
       'Dom',
       'Seg',
       'Ter',
       'Qua',
       'Qui',
       'Sex',
       'Sab'
    
     ];
    
    
    
     const available = [
    
      { id: 1,
        date:"2022-05-10",
        hour:["08:00",
             "09:00",
             "10:00",
             "11:00"]  
    
      },
      {
        id:2,
        date:"2022-05-11",
        hour:["08:00",
             "14:00",
             "15:00",
             "16:00"]  
      },
      {
        id:3,
        date:"2022-05-12",
        hour:["12:00",
             "13:00",
             "14:00",
             "16:00"]  
      },
      {
        id:4,
        date:"2022-05-13",
        hour:["07:00",
             "09:00",
             "14:00",
             "16:00"]  
      },
      {
        id:5,
        date:"2022-05-14",
        hour:["08:00",
             "13:00",
             "15:00",
             "16:00"]  
      },
      {
        id:6,
        date:"2022-05-15",
        hour:["07:00",
             "09:00",
             "13:00",
             "15:00"]   
    
      },
      {
        id:7,
        date:"2022-05-16",
        hour:["13:00",
             "14:00",
             "15:00",
             "16:00"]  
      },
      {
        id:8,
        date:"2022-05-17",
        hour:["07:00",
             "09:00",
             "10:00",
             "12:00"]  
      },
      {
        id:9,
        date:"2022-05-18",
        hour:["08:00",
             "09:00",
             "11:00",
             "12:00"]  
      },
      {
        id:10,
        date:"2022-05-19",
        hour:[
             "09:00",
             "10:00",
             "11:00"]  
      },
      {
        id:11,
        date:"2022-05-20",
        hour:["13:00",
             "15:00",
             "16:00",
             "19:00"]  
      },
      
      
     
    
     ];
    
    


    useEffect(() => {
      let daysInMonth = new Date(selectedYear, selectedMonth +1, 0).getDate();
      let newListDays = [];


      for(let i=1;i<=daysInMonth;i++) {
        let d = new Date(selectedYear, selectedMonth,i);
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();
        month = month <10 ? '0'+ month : month;
        day = day < 10? '0'+ day : day;
        let selDate = `${year}-${month}-${day}`;
       
        let avaiability =  available.filter(e=>e.date === selDate);



        newListDays.push({
        status: avaiability.length > 0 && avaiability.length!=null ? true : false,
        weekday: days[d.getDay()],
        number: i
        
        });


      }


      setListDays(newListDays);
      setSelectedDay(1);
      setListHours([]);
      setSelectedHour(0);

    }, [selectedMonth,selectedYear]);


    useEffect(() => {
     if(selectedDay>0){
      let d = new Date(selectedYear, selectedMonth,selectedDay);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      month = month <10 ? '0'+ month : month;
        day = day < 10? '0'+ day : day;
      let selDate = `${year}-${month}-${day}`;
       console.log(selDate);
      let avaiability =  available.filter(e=>e.date === selDate);
      console.log(avaiability);
      if(avaiability.length >0){
        setListHours(avaiability[0].hour);
        }
        console.log("aqui é a lista : " + listHours);

        console.log("aqui é o dia selecionado : " + selectedDay);
 
     }    

    }, [selectedDay]);

    useEffect(() => {
      let today = new Date();
      setSelectedYear( today.getFullYear());
      setSelectedMonth( today.getMonth());
      setSelectedDay (today.getDate());
   


    }, []);

const handleLeftDateClick = () => {

let mountDate = new Date(selectedYear, selectedMonth,1);
mountDate.setMonth(mountDate.getMonth() - 1);
setSelectedYear(mountDate.getFullYear());
setSelectedMonth(mountDate.getMonth());
setSelectedDay(0);



}
    const handleRightDateClick = () => {
      let mountDate = new Date(selectedYear, selectedMonth,1);
mountDate.setMonth(mountDate.getMonth() + 1);
setSelectedYear(mountDate.getFullYear());
setSelectedMonth(mountDate.getMonth());
setSelectedDay(0);


    }
    const oneHour = ( {item} ) => (
  
      <TouchableOpacity  onPress={()=>{}}>
    <View style = {styles.dateItem}>
    <Text style = {styles.dateItemWeekDay}>{item.hour}</Text>
    </View>
    </TouchableOpacity>
    )

  
    
    return(
      
        <Formik>

   <SafeAreaView style={styles.container}>
     <View style={styles.containerTitle}>
   <Text style={styles.Title}>
        Formulário de serviço
      </Text>

     
      </View>
        <View style={styles.inputWrapper} >
             
         {/*
          imprimir serviço selecionado         
         */
         }


             <View>
                 
                    <Text style={styles.fieldName}>Qual marca/modelo produto? </Text>
                    <View style={styles.input}>
                      <TextInput
                        style={styles.fieldText}
                        value={marca}
                        onChange ={ e => setMarca(e.target.value)}
                    
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={styles.fieldName}>Qual problema encontrado ?</Text>
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



                  <View style={styles.dateContainer}>
                
                <View style={styles.dateInfo}>
                

                <View style={styles.dateMontsYears}>
                <TouchableOpacity onPress={ handleLeftDateClick}>
                
                <Feather
                name="chevron-left"
                size={25}
                
              />
                </TouchableOpacity >
                              
                    
                    <Text style={styles.textodateMontsYears} >  {months[selectedMonth]} {selectedYear}  </Text> 
                    
                    
                    <TouchableOpacity onPress={handleRightDateClick}>                  
                     <Feather
                name="chevron-right"
                size={25 }
                
              />
                </TouchableOpacity>

                </View>

              <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
             
                {listDays.map((item,key)=>(
                   
                   
                   
                   <TouchableOpacity style={{opacity : item.status?1:0.5} && styles.dateItem} key={key}  onPress={()=>setSelectedDay(item.number) }>
              
                <Text style={styles.dateItemWeekDay}>{item.weekday} </Text>

                <Text style={styles.dateItemNumber}> {item.number} </Text>

               </TouchableOpacity>
                   
                ))}
                                      
                 </ScrollView>
              

                </View>

                </View>
                    
                
               
                <View style={styles.TimeInfo}>              
             
             <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
             
             {listHours.map((item,key)=>(
                
               
                
                <TouchableOpacity style={styles.dateItem} key={key}  onPress={()=>setSelectedHour(item.hour) }>
           

             <Text style={styles.dateItemNumber}> {item} </Text>
              
            </TouchableOpacity>
                
             ))}
                               
              </ScrollView>
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


      dateContainer: {
        
        
      },
      
      dateInfo: {
   
  alignItems: "center",
  justifyContent: "center",
  

      },
       
      dateMontsYears: {
  
   
     flexDirection: "row",
  alignItems: "center",
  justifyContent: "center", 
  paddingTop: 15,


      },

      textodateMontsYears: {
        fontSize: 15,
        fontWeight: 'bold',
        
        
      },

      dateItem: {
        width: 45,
        justifyContent: "center",
        borderRadius: 10,
        paddingTop: 5,
        paddingBottom: 5,
        alignItems: "center",
        
        
      },

      dateItemWeekDay: {
        fontSize: 15,
        fontWeight: 'bold',
      },

      dateItemNumber: {
        fontSize: 15,
        fontWeight: 'bold',
     
      },
      TimeInfo: {
   
        alignItems: "center",
        justifyContent: "center",
        
        
      
            },


     

      buttonContainer:{
        marginTop: 20,

      },
    

          });
