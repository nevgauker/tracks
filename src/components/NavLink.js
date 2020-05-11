import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text  } from 'react-native-elements';

import Spacer from '../components/Spacer';
import { withNavigation } from 'react-navigation';


const NavLink = ({ text, routeName, navigation }) => {
    return (
            <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
                <Spacer>
                    <Text style={styles.link}>{text}</Text>
                </Spacer>
            </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
});


export default withNavigation(NavLink);

