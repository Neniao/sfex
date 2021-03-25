import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Picker,Button } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
//import * as RNFS from 'react-native-fs'
//const RNFS = require('react-native-fs');

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
		surveys:svs,
		//sfiles:sffiles
	};
  }
  toggleOpen = () => {
  	this.setState({open:!this.state.open});
  };
  drawerContent = () => {
      let items = [];
	console.log(this.state.surveys.length);
      for (let i=0;i<this.state.surveys.length;i++) items.push(<Text key={i} style={styles.surveyListItems}>{this.state.surveys[i].Title}</Text>);
      return (
	//<TouchableOpacity 
	//onPress={this.toggleOpen}
	//style={styles.animatedBox}
	//>
	//	<Text> Survey1</Text>
	//	<Text> Survey2</Text>
	//</TouchableOpacity>
 	//<TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
        //	<Text>Close</Text>
      	//</TouchableOpacity>
	<View style={styles.drawer}>
		<Text>This is survey list</Text>
		{items} 
	</View>
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
		buttonstyle={styles.button}
		surveys={this.state.surveys}
		>
	     	<Button onPress={this.toggleOpen} title="SuV" />

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
  },
  drawer:{
  	backgroundColor:"#38c8ec",
	paddingTop:35,
	paddingLeft:10,	
  },
  button:{
  	position:'absolute',
	top:'50%',
	left:'50%',
  },
  surveyList:{
  	paddingTop:35,
	paddingLeft:10,	
  },
  surveyListItems:{
  	margin:5,
	fontSize:30,
  },
});

const sv1={
	Title:"survey1",
	Creator:"abc",
	Date:"12.11",
	Questions:[
		{
			QuestionInfo:"what’s your name?",
			QuestionType:"input"		
		},
		{
			QuestionInfo:"which one do you like the best?",
			QuestionType:"selection",	
			Items:["banana","apple","orange","lemon"]
		},
		{
			QuestionInfo:"which one do you dislike the most?",
			QuestionType:"selection",	
			Items:["banana","apple","orange","lemon"]
		},
		{
			QuestionInfo:"what’s your favorite place’s name?",
			QuestionType:"input"		
		},
		{
			QuestionInfo:"what’s your high school’s name?",
			QuestionType:"input"					
		},
		{
			QuestionInfo:"which animal do you like?",
			QuestionType:"selection",	
			Items:["dog","cat","cattle","pig"]
		},
		{
			QuestionInfo:"which movie star do you like the most?",
			QuestionType:"selection",	
			Items:["banana","apple","orange","lemon"]	
		},
		{
			QuestionInfo:"how would you rate movie Interstellar?",
			QuestionType:"selection",	
			Items:["very good","good","not bad","bad"]
		},

	]
};
const svs=[];
svs.push(sv1);
