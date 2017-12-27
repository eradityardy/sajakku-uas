import React, { Component } from "react";
import { StyleSheet, Text, View, ListView, Image, ScrollView } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Title,
  Card,
  CardItem,
  Thumbnail } from 'native-base';
import { StackNavigator } from "react-navigation";

export default class Cerpen1 extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } =this.props.navigation;
    return (
      <View style={styles.wrapper}>
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={()=> navigate('Cerpen')}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Cerpen</Title>
            </Body>
          </Header>

          <ScrollView>
          <Content>
          <Card>
            <CardItem header>
              <Text  style={styles.titleHeader}>Kartu ATM ku</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text  style={styles.textBody}>
                "Sekarang menggunakan kartu ATM kalian!", perintah Bu Nisa, guru Agama kami.
                </Text>
                <Text  style={styles.textBody}> </Text>
                <Text  style={styles.textBody}>
                ATM itu singkatan dari Aku Tidak Menyontek. Untuk mendapat kartu itu kami harus mematuhi sebuah peraturan, yaitu tidak menyontek. Kartu ATM dipakai kala ulangan dan kala latihan. Tapi, saya tidak mempunyai kartu ATM, sebab saya orangnya tidak pandai dan malas belajar.
                </Text>
                <Text  style={styles.textBody}> </Text>
                <Text  style={styles.textBody}>
                Akhirnya, ulangan pun dimulai. Aku mengerjakan soal-soal itu. Tapi, nomer 1, 3, 4, 7 dan 9, saya kesulitan. Kulihat ke sampingku untuk bertanya. Sayangnya ia memakai kartu ATM. Kulihat ke arah lain. Mereka termasuk memakai kartu ATM.
                </Text>
                <Text  style={styles.textBody}> </Text>
                <Text  style={styles.textBody}>
                Bu Nisa tersenyum melihatku. Akhirnya, saya pun menanyakan ke Varia bersama dengan mengancam kalau tidak jawab, ia tidak bakal boleh pulang denganku. Tapi, ia menyatakan kartu ATMnya. Aku mulai mulai kesal. Aku pun menjawab soal itu bersama dengan asal-asal.
                </Text>
                <Text  style={styles.textBody}> </Text>
                <Text  style={styles.textBody}>
                Saat Pulang, Aku langsung berlari ke mobil Ayah. Aku biarkan Varia mencariku. Biarin aja dia mencariku. Siapa suruh ia tidak memberiku jawaban. Aku pun memasuki mobil Ayah. Kak Fani, kakak perempuanku, telah berada di dalam mobil.
                </Text>
                <Text  style={styles.textBody}> </Text>
                <Text  style={styles.textBody}>
                “Varia mana, Len?", tanya Ayah. “Mana saya tahu", ucapku sambil menyaksikan ke arah Ayah.
                </Text>
                <Text  style={styles.textBody}> </Text>
                <Text  style={styles.textBody}>
                "Kita menunggu aja, ya", kata Ayah.
                </Text>
                <Text  style={styles.textBody}>
                Aku benci mendengar Ayah bicara begitu. Kulihat Varia mengakses pintu mobil bersama dengan muka pucat dan penuh bersama dengan keringat.
                </Text>
                <Text  style={styles.textBody}> </Text>
                <Text  style={styles.textBody}>
                "Kamu kenapa tinggalin aku, Len?", tanya Varia.
                </Text>
                <Text  style={styles.textBody}>
                "Siapa suruh tadi kamu begitu", ucapku bersama dengan suara sedikit kasar.
                </Text>
                <Text  style={styles.textBody}>
                "Varia, kamu menggunakan kartu ATM juga?", tanya Kak Fani.
                </Text>
                <Text  style={styles.textBody}>
                “Iya, Kak", jawab Varia. “Kakak termasuk ada", kata Kak Fani sambil menyatakan kartu ATMnya.
                </Text>
                <Text  style={styles.textBody}>
                "Kartu ATM itu apa?", tanya Ayah.
                </Text>
                <Text  style={styles.textBody}> </Text>
                <Text  style={styles.textBody}>
                Kak Fani dan Varia mengatakan kartu ATM kepada Ayah. Aku hanya terduduk diam memandangi jendela. Setelah selesai menjelaskan, Ayah pun mengerti.</Text>
                <Text  style={styles.textBody}> </Text>
                <Text  style={styles.textBody}>
                "Wah… Helen ada?", tanya Ayah. "Nggak ada, Yah", jawabku menundukkan kepalaku.
                </Text>
                <Text  style={styles.textBody}>
                "Kamu tahu, gak, Len? Kalau turut ATM, kami bakal bisa kelebihan, loh", kata Varia sambil menyodorkan sebuah kertas.
                </Text>
                <Text  style={styles.textBody}>
                "Wah… Aku senang ikut, Var. Besok saya daftar, deh mirip Pak Stanlius. Kamu temeni aku, ya, Var", ucapku tersenyum sesudah membaca kertas itu. "Ok", kata Varia.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text  style={styles.titleFooter}>Aditya Dewantara</Text>
            </CardItem>
          </Card>
          </Content>
          </ScrollView>

        </Container>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
		backgroundColor: '#ffffff',
		flex: 1
	},
  titleHeader: {
    fontWeight: 'bold',
    color: '#000000',
  },
  textBody: {
    color: '#000000',
  },
  titleFooter: {
    fontStyle: 'italic',
    color: '#3498db',
  }
});
