import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View , Image} from 'react-native';
import { FlatList } from "react-native-web";
import { useNavigation } from "@react-navigation/native";

export default function Screen1() {
  const navigation = useNavigation();
    var [data1, setData] = useState([]);
    
    
    useEffect(()=>{
        fetch('https://653f49a89e8bd3be29e02b46.mockapi.io/CafeShop')
      .then(response => response.json())
      .then((json)=>{
        setData(json);
      })
    }, [])
    const Item = ({image})=>(
        <View>
            <Image source={{uri: image.image}} style= {{width: 200, height: 60, borderRadius: 10, marginVertical: 30,}}></Image>
        </View>
    );
  return (
    <View style={styles.container}>
        <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {{fontWeight: 'bold', fontSize: 22}}>Welcome to Cafe world</Text>
        </View>
        <View style = {{width: '100%', height: 150, flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <FlatList
                    data = {data1}
                    renderItem={({item}) => <Item image={item}/>}
                    scrollEnabled={true}
            />
        </View>
        <View style = {{flex: 1, justifyContent: 'center', alignItems : 'center'}}>
            <TouchableOpacity style = {{width: 300, height: 45, backgroundColor: "#00BDD6", justifyContent: 'center', alignItems: 'center', borderRadius: 10}} onPress={()=>{navigation.navigate("Screen2");}}>
                <Text style = {{color: 'white', lineHeight: 22, fontSize: 14}}>GET STARTED</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#DEE1E6'
  },
});
