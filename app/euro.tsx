import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/button";
import { useEffect, useState } from "react";
import { getDolar, getEuro } from "../services/Coins";

export default function App() {
    const [euro, setEuro] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const getEuroScreen = async () => {
        setLoading(true)
        try {
            const json = await getEuro()
            setEuro(parseFloat(json.EURBRL.ask))
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(true)
            console.log(error)
        }
    }

    useEffect(() => {
        getEuroScreen()
    }, [])

    return (
        <View style={styles.container}>

            {loading && !error &&
                <>
                    <Image style={styles.img} source={require('../assets/euro.png')}
                        resizeMode="contain"
                    />
                    <Text style={styles.info}>Atualmente o valor do euro é:</Text>
                    <Text style={styles.price}>Carregando...</Text>
                    <Button name="Recarregar" onPress={() => getEuroScreen()} />
                </>
            }

            {!loading && error &&
                <>
                    <Image style={styles.img} source={require('../assets/euro.png')}
                        resizeMode="contain"
                    />
                    <Text style={styles.price}>Deu error ao pegar o valor!</Text>
                    <Button name="Recarregar" onPress={() => getEuroScreen()} />
                </>

            }

            {!loading && !error &&
                <>
                    <Image style={styles.img} source={require('../assets/euro.png')}
                        resizeMode="contain"
                    />
                    <Text style={styles.info}>Atualmente o valor do euro é:</Text>
                    <Text style={styles.price}>R$ {euro.toFixed(2)}</Text>
                    <Button name="Recarregar" onPress={() => getEuroScreen()} />
                </>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101045'
    },
    img: {
        width: '100%',
        height: 220,
        marginBottom: 20
    },

    info: {
        color: 'white',
        fontSize: 22,
        marginBottom: 20
    },
    price: {
        fontSize: 50,
        color: 'white',
        marginBottom: 50
    }
})