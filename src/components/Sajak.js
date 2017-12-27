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
  Footer,
  Fab,
  FooterTab,
  Thumbnail } from 'native-base';
import { StackNavigator } from "react-navigation";

export default class Sajak extends Component {
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
              <Button transparent onPress={()=> navigate('Dashboard')}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Sajak</Title>
            </Body>
          </Header>

          <Content>
          <List>
          <ListItem avatar>
            <Thumbnail size={80} source={{ uri: 'https://1481522-1-2.cdn.4matnetworks.com/file.ashx?i=c0c7b6dc-1803-4631-aacb-15996d11d0c1' }} />
            <Body>
              <Text style={styles.titleText} >Aditya Dewantara</Text>
              <Text note> </Text>
              <Text note style={styles.noteText} >Ibu</Text>
            </Body>
            <Right>
              <Button transparent onPress={()=> navigate('Sajak1')}>
                <Icon name='eye' />
              </Button>
            </Right>
          </ListItem>

          <ListItem avatar>
            <Thumbnail size={80} source={{ uri: 'https://1481522-1-2.cdn.4matnetworks.com/file.ashx?i=c0c7b6dc-1803-4631-aacb-15996d11d0c1' }} />
            <Body>
              <Text style={styles.titleText} >Aditya Dewantara</Text>
              <Text note> </Text>
              <Text note style={styles.noteText} >Patah</Text>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='eye' />
              </Button>
            </Right>
          </ListItem>
          </List>
        </Content>

        <Footer>
          <FooterTab>
            <Button full onPress={()=> navigate('SajakInput')}>
              <Text style={styles.btntext}>Tambah Sajak</Text>
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
		backgroundColor: '#ffffff',
		flex: 1
	},
  titleText: {
    fontWeight: 'bold',
    color: '#000000',
  },
  noteText: {
    fontStyle: 'italic',
    color: '#2c3e50',
  },
  btntext: {
    color: '#ffffff',
    fontSize: 15
  }
});
