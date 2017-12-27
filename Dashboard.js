import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import {
  Container,
  Content,
  Thumbnail,
  List,
  ListItem,
  Card,
  CardItem,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Footer,
  FooterTab } from 'native-base';

import { StackNavigator } from "react-navigation";

export default class Dashboard extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } =this.props.navigation;
    return (
      <View style={styles.wrapper}>
        <Container>
          <Header>
            <Body>
              <Title>Dashboard</Title>
            </Body>
          </Header>

        <ScrollView>
          <Content>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: 'https://pbs.twimg.com/media/DPWWwRGU8AABN7Y.png'}} />
                  <Body>
                    <Text style={styles.titleText} >Cerpen Kita</Text>
                    <Text note style={styles.noteText} >- S A J A K K U -</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{uri: 'https://pbs.twimg.com/media/DQgJOYZUMAA7Jo8.jpg'}} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent onPress={()=> navigate('Cerpen')}>
                    <Icon active name="eye" />
                    <Text> Lihat</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: 'https://pbs.twimg.com/media/DPWWwRGU8AABN7Y.png'}} />
                  <Body>
                    <Text style={styles.titleText} >Puisi Mu</Text>
                    <Text note style={styles.noteText} >- S A J A K K U -</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{uri: 'https://pbs.twimg.com/media/DQgJOYXUEAEJYdU.jpg'}} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent onPress={()=> navigate('Puisi')}>
                    <Icon active name="eye" />
                    <Text> Lihat</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: 'https://pbs.twimg.com/media/DPWWwRGU8AABN7Y.png'}} />
                  <Body>
                    <Text style={styles.titleText} >Sajak Ku</Text>
                    <Text note style={styles.noteText} >- S A J A K K U -</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{uri: 'https://pbs.twimg.com/media/DQgJOYYVwAEin-H.jpg'}} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent onPress={()=> navigate('Sajak')}>
                    <Icon active name="eye" />
                    <Text> Lihat</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>

          </Content>
        </ScrollView>

        <Footer>
          <FooterTab>
            <Button active onPress={()=> navigate('Dashboard')}>
              <Icon name="apps" />
            </Button>
            <Button onPress={()=> navigate('Search')}>
              <Icon name="search" />
            </Button>
            <Button onPress={()=> navigate('Profile')}>
              <Icon name="person" />
            </Button>
            <Button onPress={()=> navigate('Setting')}>
              <Icon name="settings" />
            </Button>
          </FooterTab>
        </Footer>

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
  titleText: {
    fontWeight: 'bold',
    color: '#000000',
  },
  noteText: {
    fontStyle: 'italic',
    color: '#2c3e50',
  }
});
