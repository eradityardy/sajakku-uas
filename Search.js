import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Container, Spinner, Header, Left, Body, Right, Footer, FooterTab, Button, Icon, Title, Segment, Content, Item, Input } from 'native-base';

import { StackNavigator } from "react-navigation";

export default class Boiler extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } =this.props.navigation;
    return (
      <View style={styles.wrapper}>
        <Container>

          <Header searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Search" />
            </Item>
            <Button transparent>
              <Text>Search</Text>
            </Button>
          </Header>

          <Content>
            <Spinner color='blue' />
          </Content>

          <Footer>
            <FooterTab>
              <Button onPress={()=> navigate('Dashboard')}>
                <Icon name="apps" />
              </Button>
              <Button active onPress={()=> navigate('Search')}>
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
