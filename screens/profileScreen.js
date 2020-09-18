import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from "react-redux"
import {getUserById} from "../redux/selectors/userPageSelectors";

const ProfileScreen = ({route}) => {
    const {userId} = route.params;
    const user = useSelector(getUserById(userId))

    return (
        <View style={styles.container}>
            {user && <Image
                source={{uri: user.user.profile_image.large}}
                style={{flex: 1}}
            />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
export default ProfileScreen
