import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  //for redirect to another page
  const navigation = useNavigation();
  //end initial
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
        <Image
          source={require("../../assets/MieAyam.jpeg")}
          style={{ width:100, height:100, borderRadius:100 }}
        />
        <View style={{ marginVertical:20 }}>
          <Text style={styles.text}>SELAMAT DATANG</Text>
          <Text style={styles.text2}>OWNER BAKMIE JOKO</Text>
        </View>
      </View>
      <View style={{ marginTop:20 }}>
        <TouchableOpacity  style={styles.button} onPress={()=>navigation.navigate('DaftarMenu')}>
          <Text style={styles.buttonText}>DAFTAR PRODUK</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.button} onPress={()=>navigation.navigate('Laporan')}>
          <Text style={styles.buttonText}>LAPORAN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EE8C33",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
  },
  text2: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    color: "#E2AFAF",
  },
  button: {
    backgroundColor: "white",
    marginVertical:15,
    paddingHorizontal:50,
    paddingVertical:20,
    borderRadius:10
  },
  buttonText:{
    fontSize: 25,
    textAlign:"center",
    color:"orange",
    fontWeight:"bold"
  }
});

export default Home;
