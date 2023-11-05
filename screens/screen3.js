import { StatusBar } from 'expo-status-bar';
import { cloneElement, useEffect, useState } from 'react';
import { RootTagContext, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View , Image} from 'react-native';
import { FlatList } from "react-native-web";
import Screen4 from './screen4';
import { useNavigation } from "@react-navigation/native";

export default function Screen3() {
  const navigation = useNavigation();
    var [data1, setData] = useState([]);
    var [dataclick, setdataclick] = useState([]);
    <Screen4 dataFromParent = {dataclick}/>
    useEffect(()=>{
        fetch('https://653f49a89e8bd3be29e02b46.mockapi.io/drinks')
      .then(response => response.json())
      .then((json)=>{
        setData(json);
      })
    }, [])
    const Item = ({image})=>(
        <View style = {{width: '100%', height: 54, borderWidth: 1, borderRadius: 4,borderColor: '#BCC1CA', flexDirection: 'row', alignItems: 'center', paddingRight: 10, marginVertical: 10, backgroundColor:'white'}}>
            
            <Image source={{uri: image.image}} style={{width: '100%', height: "100%", flex: 2, marginRight: 10, borderRadius: 4}}></Image>

            <View style={{flex: 4, }}>
                <Text style = {{flex: 1,fontSize: 16, lineHeight: 26, top: -5}}>{image.name}</Text>
                <View style = {{flex:1,flexDirection: 'row', alignItems: 'center', bottom: -5}}>
                    <Image source={require('../assets/Frame.png')} style={{width: 10, height: 10}}></Image>
                    <Text style={{color: '#565E6C', fontSize: 12, lineHeight: 20}}>${image.price}</Text>
                </View>
            </View>
            <TouchableOpacity style = {{flex: 1, width: '100%', height: '100%', marginHorizontal: 30}} >
              <Image source={require('../assets/Image230.png')} style={{width: 20, height: 20, resizeMode: 'contain', flex: 1}}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {{flex: 1, width: '100%', height: '100%'}} onPress={()=>{
              setdataclick(image);
            }}>
              <Image source={require('../assets/Image231.png')} style={{width: 20, height: 20, resizeMode: 'contain', flex: 1}}></Image>
            </TouchableOpacity>
            
        </View>
    );
  return (
    <View style={styles.container}>
        <View style = {{flex: 10}}>
        <FlatList
                    data = {data1}
                    renderItem={({item}) => <Item image={item}/>}
                    scrollEnabled={true}
            />
        </View>
        <View style = {{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style ={{backgroundColor: '#EFB034', width: 347, height: 47, justifyContent: 'center', alignItems:'center', borderRadius: 6}} onPress={()=>{  navigation.navigate("Screen4");}}>
                <Text style  = {{fontSize: 16, lineHeight: 26, color: 'white'}}>GO TO CART</Text>
            </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 21
  },
});
