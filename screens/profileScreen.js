import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Card from "../components/uikit/Card";
import {useSelector, useDispatch} from "react-redux"
import {getUserById} from "../redux/selectors/userPageSelectors";

const ProfileScreen = ({route}) => {
    const {userId} = route.params;
    const user = useSelector(getUserById(userId))

    return (
        <View style={styles.container}>
            {user && <Image
                source={{uri: user.user.profile_image.large}}
                style={{width: 300, height: 300}}
            />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default ProfileScreen
