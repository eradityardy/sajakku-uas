import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button, Container, Header, Content, List, ListItem, Icon, Left, Body, Right, Switch, Title, Footer, FooterTab } from 'native-base';

import { StackNavigator } from "react-navigation";

export default class Setting extends Component {
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
              <Title>Setting</Title>
            </Body>
          </Header>

          <Content>
            <List>
              <ListItem icon>
                <Body>
                  <Text style={styles.textList}>Logout</Text>
                </Body>
                <Right>
                  <Button transparent onPress={()=> navigate('Login')}>
                    <Icon name="exit" />
                  </Button>
                </Right>
              </ListItem>
            </List>
          </Content>

          <Footer>
            <FooterTab>
              <Button onPress={()=> navigate('Dashboard')}>
                <Icon name="apps" />
              </Button>
              <Button onPress={()=> navigate('Search')}>
                <Icon name="search" />
              </Button>
              <Button onPress={()=> navigate('Profile')}>
                <Icon name="person" />
              </Button>
              <Button active onPress={()=> navigate('Setting')}>
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
  textList: {
    fontSize: 16,
    color: '#000000',
  }
});
