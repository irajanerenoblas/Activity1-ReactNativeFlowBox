import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { styles } from './style/Styles.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

        <View style={[
          styles.mainheader,
          {backgroundColor: '#0E21A0'}
        ]}>

        <View style={styles.contentmargin}>
        <Image 
        source={require('./src/image/profile.png')} 
        style={{width: 100, height: 100, borderRadius: 50}}
        />
          <Text style={[styles.name,
            {fontSize: 44, fontFamily: 'Arial',
             marginLeft: 5}
          ]}>Ira Renoblas</Text>
          <Text style={[styles.name,
            {fontSize: 18, fontFamily: 'Arial',
          marginTop: 3}
          ]}> BS Information Technology 3</Text>
        </View>

      </View>
        <View style={styles.container2}>
          <Text style={[
          {color: 'black' , fontSize: 25}
          ]}>My Subjects</Text>

          <View style={styles.subheader}>

          <Text style={styles.subtext}>ELEC 2</Text>
          <Text style={styles.subtxt2}>Web Development/ Web Enterprise{'\n'}Units: 3</Text>
          </View>

          <View style={styles.subheader}>
          <Text style={styles.subtext}>ELEC 3</Text>
          <Text style={[
              {marginRight: 123, marginTop: 23}   
            ]}>Mobile Application{'\n'}Units: 3</Text>
          </View>

          <View style={styles.subheader}>
          <Text style={styles.subtext}>IT 311</Text>
          <Text style={[
            {marginRight: 105, marginTop: 23}   
          ]}>Software Engineering{'\n'}Units: 3</Text>
          </View>

          <View style={styles.subheader}>
          <Text style={styles.subtext}>IT 312</Text>
          <Text style={[
            {marginRight: 27, marginTop: 23, fontSize: 13}   
          ]}>Information Assurance and Security 2{'\n'}Units: 3</Text>
          </View>

          <View style={styles.subheader}>
          <Text style={styles.subtext}>IT 313</Text>
          <Text style={[
            {marginRight: 107, marginTop: 23}   
          ]}>Quantitative Methods{'\n'}Units: 3</Text>
          </View>
          <Text style={[
            {color: '#0E21A0' ,
            fontSize: 15,
            marginTop: 15,
            marginLeft: 205}
            ]}>Click here to see more...</Text>
      </View>
    </View>

    
  );
}
