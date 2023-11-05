import { StatusBar } from 'expo-status-bar';
import { cloneElement, useEffect, useState } from 'react';
import { RootTagContext, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View , Image} from 'react-native';
import { FlatList } from "react-native-web";
import { useNavigation } from "@react-navigation/native";

export default function Screen2() {
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
      <TouchableOpacity onPress={()=>{  navigation.navigate("Screen3");}}>
          <View style = {{height: 200, width: '100%', backgroundColor: 'white', marginBottom: 21, borderRadius: 10}}>
            <View style = {{flex: 1.14}}>
                <Image source={{uri: image.image}} style = {{height: '100%', width: '100%', borderRadius: 8}}/>
            </View>
            <View style = {{flex: 0.86, padding: 7, paddingTop: 0}}>
                <View style = {{flex: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style = {{flexDirection: 'row', backgroundColor: '#F3F4F6', flex: 6, marginEnd: 10, padding: 5, alignItems: 'center'}}>
                        <Image source={image.status?require('../assets/Image178.png'):require('../assets/Image190.png')} style = {{width: 15, height: 15, resizeMode: 'contain', flex: 1, margin: 4}}></Image>
                        <Text style ={{flex: 5,color: image.status?'#1DD75B':'#DE3B40', fontSize: 14, lineHeight: 22}}>Accepting Orders</Text>
                        
                    </View>
                    <View style = {{flexDirection: 'row', backgroundColor: '#F3F4F6', flex: 6, padding: 5, alignItems: 'center'}}>
                        <Image source={require('../assets/Image184.png')} style = {{width: 20, height: 15, resizeMode: 'contain', flex: 1, margin: 4}}></Image>
                        <Text style ={{flex: 5, color: '#DE3B40', fontSize: 14, lineHeight: 22}}>{image.time}</Text>
                    </View>
                    <Image source={require('../assets/Image185.png')} style = {{width: 20, height: 15, resizeMode: 'contain', flex: 1}}></Image>
                </View>
                <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 2}}>
                    <Text style = {{fontWeight: 'bold', fontSize: 16, lineHeight: 26}}>{image.name}</Text>
                </View>
                <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 2}}>
                    <Text style = {{ fontSize: 14, color:'#171A1F', lineHeight: 22}}>{image.dc}</Text>
                </View>
            </View>
        </View>
      </TouchableOpacity>
        
    );
  return (
    <View style={styles.container}>
        <View style={{flex: 1}}></View>
        <View style = {{height: '500'}}>
            <FlatList
                        data = {data1}
                        renderItem={({item}) => <Item image={item}/>}
                        scrollEnabled={true}
                />
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 21
  },
});
