import { View, Text } from "react-native-web";
import { Link } from 'expo-router';

export default function AboutPage() {

    return (
        <View>
            <Text>This is the about page.</Text>
            <Link push href="/HomePage">Home page</Link>
            <Link replace href="/HomePage">Home page using replace method</Link>
        </View>
    )
}