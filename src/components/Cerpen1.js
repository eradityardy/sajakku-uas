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
                <Text  style={styles.titleHeader}>Persahabatan Yang Hancur Karena Cinta</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text  style={styles.textBody}>
                  Cinta itu memang kadang membuat orang lupa akan segalanya. Karena cinta kita relakan apapun yang kita miliki. Bagi kaum wanita mencintai itu lebih baik daripada dicintai. Jangan terlalu mengharapkan sesorang yang belum tentu mencintai kita tapi terimalah orang yang sudah mencintai kita apa adanya. Mencintai tapi tak dicintai itu seperti olahraga lama-lama supaya kurus tapi hasilnya nggak kurus-kurus. Belajarlah mencintai diri sendiri sebelum anda mencintai orang lain.
                  </Text>
                  <Text  style={styles.textBody}> </Text>
                  <Text  style={styles.textBody}>
                  Gue Amel siswa kelas X. Dulu gue selalu menolak dan mengabaikan orang yang mencintai gue, tapi sekarang malah tebalik gue selalu diabaikan sama orang yang gue cintai.
                  </Text>
                  <Text  style={styles.textBody}> </Text>
                  <Text  style={styles.textBody}>
                  Gue suka sama teman sekelas gue dan plus dia itu teman dekat gue, udah lumayan lamalah. Cowok itu namanya Nino anak rohis. Gue suka sama dia berawal dari perkenalan terus berteman lama-lama dekat dan akhirnya gue jadi jatuh cinta gini.
                  </Text>
                  <Text  style={styles.textBody}> </Text>
                  <Text  style={styles.textBody}>
                  Oh iya gue punya temen namanya Arum, dia temen gue dari SMP. Arum gue dan Nino itu berteman dekat sejak masuk SMA.
                  </Text>
                  <Text  style={styles.textBody}> </Text>
                  <Text  style={styles.textBody}>
                  Suatu hari gue ngeliat Arum sama Nino itu bercanda bareng dan mereka akrab banget seperti orang pacaran. Jujur gue cemburu, tapi gue nyembunyiinn itu dari Arum.
                  </Text>
                  <Text  style={styles.textBody}> </Text>
                  <Text  style={styles.textBody}>
                  Lama-lama capek juga mendam rasa suka kayak gini. Akhirnya gue mutusin untuk cerita sama Arum.
                  </Text>
                  <Text  style={styles.textBody}> </Text>
                  <Text  style={styles.textBody}>
                  "Rummmm gue mau ngomong sesuatu, tapi jangan bilang siapa-siapa"
                  </Text>
                  <Text  style={styles.textBody}>
                  "Ngomong apa?" tanya Arum
                  </Text>
                  <Text  style={styles.textBody}>
                  "Jujur gue suka sama Nino udah lama, dan gue cemburu kalo lo dekat sama Nino!" Jawab Amel
                  </Text>
                  <Text  style={styles.textBody}>
                  "Lo suka Nino? Serius?" Tanya Arum
                  </Text>
                  <Text  style={styles.textBody}>
                  "Iya, tapi lo jangan bilang Ninonya" gertak Amel
                  </Text>
                  <Text  style={styles.textBody}>
                  "Iyaiya maaf ya kalo gue udah buat lo cemburu"
                  </Text>
                  <Text  style={styles.textBody}>
                  "Okee"
                  </Text>
                  <Text  style={styles.textBody}> </Text>
                  <Text  style={styles.textBody}>
                  Amel makin lama makin dekat dan Amel susah untuk ngelupain Nino. Amel berfikir Nino nggak akan pernah jatuh cinta sama Amel. Walau Amel udah ngerasa seperti itu tapi dia tetap berjuang. Tanpa disadari Arum ternyata juga suka sama Nino.
                  </Text>
                  <Text  style={styles.textBody}> </Text>
                  <Text  style={styles.textBody}>
                  Amel mengetahui kalo Arum suka sama Nino. Nggak disengaja Amel membaca buku diary Arum. Disitu tertulis curhatan Arum tentang perasaannya kepada Nino.
                  </Text>
                  <Text  style={styles.textBody}> </Text>
                  <Text  style={styles.textBody}>
                  Setelah Amel membaca buku diary Arum, dia merasa kecewa karena temen sendiri juga suka sama cowok yang sama. Tapi Amel berfikir rasa suka itu datangnya tiba-tiba jadi siapa pun berhak untuk suka sama Nino. Amel tetap terus berjuang mengambil hati Nino, walau harapanya kecil.
                  </Text>
                  <Text  style={styles.textBody}> </Text>
                  <Text  style={styles.textBody}>
                  Di taman sekolah Amel melihat Arum dan Nino sedang berincang-bincang, tapi ini beda mereka terlihat serius. Amel penasaran dan akhirnya ia nguping dibalik pohon.
                  </Text>
                  <Text  style={styles.textBody}> </Text>
                  <Text  style={styles.textBody}>
                  "Ruummm gue suka sama lo, lo mau nggak jadi pacar gue?" Tanya Nino
                  </Text>
                  <Text  style={styles.textBody}>
                  Arum kaget dia bingung harus jawab apa, tapi akhirnya Arum menerima Nino jadi pacarnya tanpa memikirkan perasaan Amel sahabatnya sendiri.
                  </Text>
                  <Text  style={styles.textBody}> </Text>
                  <Text  style={styles.textBody}>
                  "Iya aku mau" Jawab Arum
                  </Text>
                  <Text  style={styles.textBody}>
                  Amel yang mendengar jawaban Arum dibalik pohon kaget, dia tak menyangka sahabatnya akan tega. Tanpa berfikir Amel keluar dari belakang pohon.
                  </Text>
                  <Text  style={styles.textBody}> </Text>
                  <Text  style={styles.textBody}>
                  "Rumm lo pacaran sama Nino? Congrast ya lo udah bikin gue sakit hati"
                  </Text>
                  <Text  style={styles.textBody}>
                  Arum dan Nino kaget tiba-tiba Amel muncul dari belakang pohon dan bilang sperti itu.
                  </Text>
                  <Text  style={styles.textBody}> </Text>
                  <Text  style={styles.textBody}>
                  "Maafin gue Mell, tapi gue cinta sama Nino"
                  </Text>
                  <Text  style={styles.textBody}>
                  "Yaudahlah"
                  </Text>
                  <Text  style={styles.textBody}> </Text>
                  <Text  style={styles.textBody}>
                  Amel langsung pergi meninggalkan Arum dan Nino. Perasaanya campur aduk nggak karuan, dia masih bingung kenapa temannya tega melakukan hal itu. Padahal Arum tau kalo Amel udah lama ngejar-ngejar Nino.
                  </Text>
                  <Text  style={styles.textBody}> </Text>
                  <Text  style={styles.textBody}>
                  Persahabatan bisa hancur begitu saja karena cinta. Utamakan sahabat mu daripada pacarmu karena orang yang bakal selalu ada disaat kamu senang dan susah itu sahabat. Persahabatn yang dijalin cukup lama bisa hancur seketika karena masalah cinta.
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
