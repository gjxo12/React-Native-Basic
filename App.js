import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Home from './screen/home';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={this.style.container}>
        <Home />
        <Text> Sample Quiz </Text>

      </View>
    );
  }

  style = StyleSheet.create({
    container:{
      paddingTop:40,
      paddingHorizontal:16,
    }
  })

}


// import react from 'react';
// import React, { Component } from 'react';
// import { View, Text ,StyleSheet} from 'react-native';

// const App = () =>{
//   return (
//     <View style={style.container}>
//       <Text> Sampe Quiz </Text>
//     </View>
//   );
// };

// export default App;

// const style = StyleSheet.create({
//   container:{
//     paddingTop:40,
//     paddingHorizontal: 16,
//   }
// });


