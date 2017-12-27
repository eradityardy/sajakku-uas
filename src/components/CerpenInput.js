import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, ListView, Image, ScrollView } from "react-native";
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
  Footer,
  FooterTab,
  Thumbnail } from 'native-base';
import { StackNavigator } from "react-navigation";

export default class CerpenInput extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } =this.props.navigation;
    return (
      <ScrollView>
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

          <Content>
          <View style={styles.contenter}>

          <TextInput
            style={styles.textinputjudul}
            placeholder="Judul Cerpen"
            placeholderTextColor="#2980b9"
            underlineColorAndroid={'transparent'}
            onSubmitEditing={() => this.cerpenInput.focus()} />

          <TextInput
            style={styles.textinputcerpen}
            placeholder="Ketik Cerpen"
            placeholderTextColor="#2980b9"
            underlineColorAndroid={'transparent'}
            ref={(input) => this.cerpenInput = input} />

          </View>
          </Content>

          <Footer>
            <FooterTab>
              <Button full onPress={()=> navigate('Cerpen')}>
                <Text style={styles.btntext}>Simpan</Text>
              </Button>
            </FooterTab>
          </Footer>

        </Container>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
		backgroundColor: '#ecf0f1',
		flex: 1,
    alignSelf: 'stretch'
	},
  contenter: {
    paddingTop: 10,
    alignItems: 'center'
  },
	textinputjudul: {
		alignSelf: 'stretch',
    alignItems: 'center',
		backgroundColor: '#FFFFFF',
		height: 50,
		marginBottom: 30,
		color: '#000000',
		paddingHorizontal: 10
	},
  textinputcerpen: {
		alignSelf: 'stretch',
    alignItems: 'center',
		backgroundColor: '#FFFFFF',
		height: 300,
		marginBottom: 30,
		color: '#000000',
		paddingHorizontal: 10
	},
  btntext: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
