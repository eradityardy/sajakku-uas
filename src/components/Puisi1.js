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

export default class Puisi1 extends Component {
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
              <Button transparent onPress={()=> navigate('Puisi')}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Puisi</Title>
            </Body>
          </Header>

          <ScrollView>
          <Content>
            <Card>
              <CardItem header>
                <Text  style={styles.titleHeader}>Kepada Tuan dalam Kenang</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text  style={styles.textBody}>
                  Bersama dengan surat ini saya akan akhiri semua genang air yang terus menenggelamkan hingga ke hilir.
                  </Text>
                  <Text  style={styles.textBody}> </Text>

                  <Text  style={styles.textBody}>
                  Bukan bermaksud untuk menghapus bayangan akan Tuan, apalagi melupakan semua coretan masa lalu, bukan. Saya hanya ingin belajar melepaskan apa yang seharusnya dilepas. Maka izinkan saya memulai noda hitam diatas luas
putih ini.
                  </Text>
                  <Text  style={styles.textBody}> </Text>

                  <Text  style={styles.textBody}>
                  Tuan, terimakasih telah membiarkan saya bermain di dalam labirin panjang merah muda yang hampir saya genggam. Masih saya ingat bagaimana Tuan menarik saya masuk dan berjanji akan mencari jalan keluar bersama. Sungguh saya tak pernah takut hilang dalam mencari jalan, namun saya hanya lelah tersesat dipeluk dahan yang menjalar sedangkan Tuan dibawa pergi peri kecil biru yang sendu.
                  </Text>
                  <Text  style={styles.textBody}> </Text>

                  <Text  style={styles.textBody}>
                  Tuan, terimakasih atas pelukan hangat yang berbaur indah bersama lukisan senja di mata teduh itu. Setiap sore kala matahari mulai lelah, kita berlari membelah padang hijau dan menari bersama irama cinta yang mempesona. Bunga kuning yang Tuan sematkan di antara rambut hitam ini perlahan memudar dan ditelan waktu. Percayalah, rasa ini masih terus tumbuh walau Tuan sudah hilang dijemput rapuh.
                  </Text>
                  <Text  style={styles.textBody}> </Text>

                  <Text  style={styles.textBody}>
                  Tuan, terimakasih perihal malam penuh terang yang kau bawa bersama sajak hati penuh arti. Rangkaian kata manis Tuan ukir di atas kertas biru muda dijaga pita hitam kesukaanku. Tuan bilang, puisi cinta yang ini akan terus hidup digenggam hangat dalam erat. Sampai saat ini masih saya selimuti janji itu meski Tuan sudah terbang bersama awan.
                  </Text>
                  <Text  style={styles.textBody}> </Text>

                  <Text  style={styles.textBody}>
                  Tuan, mereka bilang jangan pernah berenang di dalam kolam hitam masa lalu. Awalnya saya tak pernah bisa keluar dan naik ke permukaan seperti yang mereka katakan, namun seiring berjalannya waktu saya mengerti bahwa bukan ini yang Tuan harapkan.
                  </Text>
                  <Text  style={styles.textBody}> </Text>

                  <Text  style={styles.textBody}>
                  Mulai hari ini saya berjanji tak akan membuat Tuan frustasi diatas sana melihat saya meraung tak jelas bersama bantal yang buluk itu. Tak ada lagi sumpah serapah kepada semesta yang menjadi pemisah.
                  </Text>
                  <Text  style={styles.textBody}> </Text>

                  <Text  style={styles.textBody}>
                  Oh iya, bolehkah saya mengutarakan permintaan terakhir sebelum surat ini berakhir?
                  </Text>
                  <Text  style={styles.textBody}> </Text>

                  <Text  style={styles.textBody}>
                  Tetaplah menjadi bisikan rindu yang terhembus bersama dengan awan yang berjalan.
                  </Text>
                  <Text  style={styles.textBody}> </Text>

                  <Text  style={styles.textBody}>
                  Maka saya akan selalu menjadi pulang untuk Tuan yang tak pernah lekang.
                  </Text>
                  <Text  style={styles.textBody}> </Text>
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
