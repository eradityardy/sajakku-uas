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
import * as firebase from 'firebase';

export default class Puisi extends Component {
  constructor() {
      super();
    let ds = new ListView.DataSource({rowHasChanged : (r1,r2) => r1 !== r2 });
    this.state = {
      itemDataSource : ds
    }
    this.itemsRef = firebase.database().ref('puisi');
    this.renderRow = this.renderRow.bind(this);
  }
  componentWillMount() {
    this.getItems(this.itemsRef);
  }
  componentDidMount() {
    this.getItems(this.itemsRef);
  }

  getItems(itemRef){
    itemRef.on('value',(snap) => {
      let items = [];
      snap.forEach((child) =>{
        items.push({
          Nama : child.val().nama,
          Judul : child.val().judul,
          _key : child.key
        });
      });
      this.setState({
        itemDataSource : this.state.itemDataSource.cloneWithRows(items)
      });
    });
  }

  renderRow(item){
    return(
      // <TouchableHighlight
      // onPress = {() => {
      //   this.pressRow(item);
      // }}
      // >
      <View style={styles.li}>
        <View style={styles.liTextView}>
          <Text style={styles.liText}>{item.Nama}</Text>
        </View>
        <View style={styles.liTextView}>
          <Text style={styles.liText}>{item.Judul}</Text>
        </View>
      </View>
      // </TouchableHighlight>
    );
  }

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
              <Title>Puisi</Title>
            </Body>
          </Header>

          <Content>
          <ListView
              dataSource = {this.state.itemDataSource}
              renderRow = {this.renderRow}
              style = {styles.liContainer}
            />

        </Content>

        <Footer>
          <FooterTab>
            <Button full onPress={()=> navigate('PuisiInput')}>
              <Text style={styles.btntext}>Tambah Puisi</Text>
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
  },
  li: {
  backgroundColor : '#fff',
  borderColor : 'transparent',
  borderWidth : 2,
  width : 300,
},
liTextView : {
},
liText : {
  color : '#333',
  fontSize : 16,
},
liContainer : {
  height : 700,
}
});
