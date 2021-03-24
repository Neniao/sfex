import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Picker } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
//import * as RNFS from 'react-native-fs'
const RNFS = require('react-native-fs');

/*const svpath = RNFS.ExternalDirectoryPath + 'sv';
var svfiles = [];
RNFS.readDir(RNFS.svpathh).then(files =>{
	svfiles = files;
})
.catch(err =>{
	console.log(err.message,err.code)
});*/



export default class App extends React.Component{

  constructor(props){
  	super(props);
	this.state={
		open:false,
		sfiles:sffiles
	};
  }
  toggleOpen = () => {
  	this.setState({open:!this.state.open});
  };
  drawerContent = () => {
      let items = [];
      for (let i=0;i<svfiles.length;i++) items.push(<Picker.Item lable={svfiles[i].name} />);
      return (
      	<Picker 
	selectedValue={selectedValue}
	style={{height:30,width:50}}
	>
		{items}		
	</Picker>

      );
  };
  render(){
	  return (
	   <View style={styles.container}>
	      <MenuDrawer 
		open={this.state.open}
		drawerContent={this.drawerContent()}
		drawerPercentage={45}
		animationTime={250}
		overlay={true}
		opacity={0.8}
		>
	     	<TouchableOpacity onPress={this.toggleOpen} style={styles.body}>
			<Text>SurV</Text>		
		</TouchableOpacity>
	      </MenuDrawer>
	   </View>
	  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:0
  },
  animatedBox:{
	flex:1,
	backgroundColor:"#38c8ec",
	padding:10
  },
  body:{
	flex:1,
	alignItems:'center',
	justifyContent:'center',
	backgroundColor:'#f04812'
  }
});
