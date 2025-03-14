import { Pressable, StyleSheet, Text } from "react-native"

type Props = {
    name: string,
    onPress: () => void
}

export const Button = ({ name, onPress }: Props) => {
    return (
        <Pressable style={styles.buttonArea} onPress={onPress}>
            <Text style={styles.buttontext}>{name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonArea: {
        backgroundColor: '#ff9900',
        padding: 20,
        borderRadius: 10
    },
    buttontext: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold'
    }
})