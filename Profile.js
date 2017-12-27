import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  ListView } from 'react-native';
import {
  Container,
  Content,
  Thumbnail,
  List,
  ListItem,
  Card,
  CardItem,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Footer,
  FooterTab,
  Header } from 'native-base';

import { StackNavigator } from "react-navigation";

const datas = [
  'Persahabatan yang Hancur karena Cinta',
  'Kartu ATM ku',
  'Kepada Tuan dalam Kenang',
  'Karawang-Bekasi',
  'Ibu',
  'Patah',
];
export default class Profile extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
    const { navigate } =this.props.navigation;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <View style={styles.container}>
        <Container>
          <Header>
            <Body>
              <Title>Profile</Title>
            </Body>
          </Header>

          <ImageBackground style={styles.headerBackground} source={{uri: 'https://1481522-1-2.cdn.4matnetworks.com/file.ashx?i=c0c7b6dc-1803-4631-aacb-15996d11d0c1'}}>
            <View style={styles.header}>
              <View style={styles.profilepicWrap}>
                <Image style={styles.profilepic} source={{uri: 'https://1481522-1-2.cdn.4matnetworks.com/file.ashx?i=c0c7b6dc-1803-4631-aacb-15996d11d0c1'}} />
              </View>
              <Text style={styles.name}>Aditya Dewantara</Text>
              <Text style={styles.pos}>- CEO Sajakku -</Text>
            </View>
          </ImageBackground>

          <View style={styles.bar}>
            <View style={[styles.barItem, styles.barseparator]}>
              <Text style={styles.barTop}>2</Text>
              <Text style={styles.barBottom}>Cerpen</Text>
            </View>
            <View style={[styles.barItem, styles.barseparator]}>
              <Text style={styles.barTop}>2</Text>
              <Text style={styles.barBottom}>Puisi</Text>
            </View>
            <View style={styles.barItem}>
              <Text style={styles.barTop}>2</Text>
              <Text style={styles.barBottom}>Sajak</Text>
            </View>
          </View>

          <ScrollView>
            <View style={styles.photoGrid}>
            <Content>
              <List
                dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                renderRow={data =>
                <ListItem>
                  <Text style={styles.titleText}> {data} </Text>
                </ListItem>}
                renderLeftHiddenRow={data =>
                  <Button full onPress={() => alert(data)}>
                    <Icon active name="pen" />
                  </Button>}
                renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                  <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                    <Icon active name="trash" />
                  </Button>}
                leftOpenValue={75}
                rightOpenValue={-75}
              />
            </Content>
            </View>
          </ScrollView>

        <Footer>
          <FooterTab>
            <Button onPress={()=> navigate('Dashboard')}>
              <Icon name="apps" />
            </Button>
            <Button onPress={()=> navigate('Search')}>
              <Icon name="search" />
            </Button>
            <Button active onPress={()=> navigate('Profile')}>
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
  container: {
		backgroundColor: '#ffffff',
		flex: 1,
	},
  headerBackground: {
		flex: 1,
    width: null,
    alignSelf: 'stretch'
	},
  header: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0, 0.5)'
  },
  profilepicWrap: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0, 0.4)',
    borderWidth: 16
  },
  profilepic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    fontWeight: 'bold'
  },
  name: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },
  pos: {
    fontSize: 14,
    color: '#0394c0',
    fontStyle: 'italic'
  },
  bar: {
		borderTopColor: '#fff',
    borderTopWidth: 4,
    backgroundColor: '#3498db',
    flexDirection: 'row'
	},
  barseparator: {
    borderRightWidth: 4
  },
  barItem: {
    flex: 1,
    padding: 18,
    alignItems: 'center'
  },
  barTop: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  barBottom: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
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
