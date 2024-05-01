import { View, Text } from "react-native-web";
import { Link, useLocalSearchParams } from 'expo-router';

export default function UserPage() {
    // takes the url string
    const {user} = useLocalSearchParams()

    return (
        <View>
            <Text>This is {user}'s page.</Text>
            <Link href="/HomePage">Home page</Link>
            <Link href="/AboutPage">About page</Link>
            <Link href="/UserProfilePage">User profile page</Link>
        </View>
    )
}