import React from 'react';
import { Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
    <View style={{ backgroundColor: '#e0ffff', flex: 1 }}> {/* burada görmüş olduğunuz
    View en arka planda bulunan ve tüm viewları içerisine alan viewdır. flex:1 vererek tüm arkaplanı
    kaplamasını sağladık. dikkat ederseniz altta vermiş olduğumuz Viewda margin özelliği ile arka tarafta
    görünmesini sağladık. */}


        <View style={{ backgroundColor: '#8a2be2', flex: 1, marginTop: 25, marginBottom: 25, marginLeft: 15, marginRight: 15 }} >
          <Text style={{ fontSize: 25, color: 'white', textAlign: 'center' }}>React Native Flex ve FlexDirection Yapısı </Text>
        </View>
        <View style={{ backgroundColor: '#90ee90', flex: 2 }} >
          <Text style={{ fontSize: 35, color: 'white', textAlign: 'center' }}>github.com/zozdag</Text>
        </View>
        <View style={{ backgroundColor: 'blue', flex: 3, flexDirection: 'row', marginTop: 15 }} >
          {/*Yukarıda 3 View oluşturduk ve flex özellikleri için birincisine 1 ikincisine 2 üçüncüsüne ise 3 vererek
          ekrandaki boyutlarını ayarladık 3+2+1=5 sonucu çıkar yani 3. olan ekranın 3/5 ini 2. olan ekranın 2/5 ini
          ve birinci olan ise ekranın 1/5 ini kaplıyacak anlamını taşır. */}

          {/* Gelelim flexDirectiona eğer row özelliği verirsek Viewlarımız dikey hizalanır.
          column olarak ise içerisindeki tüm viewlar yatay hizalanacak anlamına gelir.
          Aşşağıda gördüğünüz Viewlarda bu işlem yapılmıştır.  */}
          <View style={{ backgroundColor: 'aqua', flex: 1 }}></View>
          <View style={{ backgroundColor: 'yellow', flex: 2 }}>
            <View style={{ backgroundColor: '#ff6a6a', flex: 1 }}></View>
            <View style={{ backgroundColor: '#ee1289', flex: 1 }}></View>
          </View>
        </View>
      </View>


    );


  }

}
