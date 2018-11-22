import React from 'react';
import {View, Image, Text} from 'react-native';
 
class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View
            style={{
                flexDirection: "row",
                width: '100%', 
                height: 100, 
                position: 'absolute',
                padding: 20,
                top: 0
            }}
            >

                <Image 
                    style={{flex: 0.15, height: undefined, width: undefined, resizeMode: "contain"}}
                    source={require("../assets/double_arrow_left.png")}
                />
                <Text
                    style={{margin: 10, color: "white", fontSize: 23, textAlignVertical:"center"}}
                >{this.props.title}</Text>

            </View>
        )
    }

}

export default Header