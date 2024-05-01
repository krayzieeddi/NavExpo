import { View, Text } from "react-native-web";
import { Link } from 'expo-router';

export default function HomePage() {

    return (
        <View>
            <Text>This is the home page.</Text>
            <Link href="/AboutPage">About page</Link>
            <Link href="/UserProfilePage">User profile page</Link>
        </View>
    )
}