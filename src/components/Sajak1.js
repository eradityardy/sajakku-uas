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
              <Button transparent onPress={()=> navigate('Sajak')}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Sajak</Title>
            </Body>
          </Header>

          <ScrollView>
          <Content>
            <Card>
              <CardItem header>
                <Text  style={styles.titleHeader}>Ibu</Text>
              </CardItem>
              <CardItem>
              <Body>
                <Text  style={styles.textBody}>
                Ibu,
                </Text>
                <Text  style={styles.textBody}> </Text>

                <Text  style={styles.textBody}>
                Maaf jika selama beberapa tahun kau di sisi, tak sekalipun aku pernah menciummu di kedua pipi. Maaf atas segala ragu yang aku pelihara menahun. Atas segala permintaan maaf yang tertahan dan tak jua terlontarkan lisan.
                </Text>
                <Text  style={styles.textBody}> </Text>

                <Text  style={styles.textBody}>
                Putrimu ini memang gengsi sekali untuk mengungkap. Inginnya diam-diam didekap. Bahkan seusia ini aku masih seringkali menangis. Masih seringkali merajuk dan memasang wajah suntuk.
                </Text>
                <Text  style={styles.textBody}> </Text>

                <Text  style={styles.textBody}>
                Sungguh, mungkin kata-kata saja tak mampu mewakili segala kecintaanmu yang penuh. Pada hari ini, aku ingin menulis puisi. Spesial. Untuk ibuku yang andal dalam segala hal.
                </Text>
                <Text  style={styles.textBody}> </Text>

                <Text  style={styles.textBody}>
                Percayalah, Ibu. Mungkin aku memang malu untuk ucap sayang. Namun doaku akan selalu teruntai dalam hari-harimu yang panjang. Aku akan berusaha menjadi wanita yang taat, agar aku mampu menghadiahi Surga sebagai tempat kita untuk beristirahat.
                </Text>
                <Text  style={styles.textBody}> </Text>

                <Text  style={styles.textBody}>
                Aku mencintaimu dalam tabah yang tercurah.
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
