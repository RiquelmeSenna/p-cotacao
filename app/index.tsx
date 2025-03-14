import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/button";
import { useEffect, useState } from "react";
import { getDolar } from "../services/Coins";

export default function App() {
    const [dolar, setDolar] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const getDolarScreen = async () => {
        setLoading(true)
        try {
            const json = await getDolar()
            setDolar(parseFloat(json.USDBRL.ask))
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(true)
            console.log(error)
        }
    }

    useEffect(() => {
        getDolarScreen()
    }, [])

    return (
        <View style={styles.container}>

            {loading && !error &&
                <>
                    <Image style={styles.img} source={require('../assets/dolar.png')}
                        resizeMode="contain"
                    />
                    <Text style={styles.info}>Atualmente o valor do dolar é:</Text>
                    <Text style={styles.price}>Carregando...</Text>
                    <Button name="Recarregar" onPress={() => getDolarScreen()} />
                </>
            }

            {!loading && error &&
                <>
                    <Image style={styles.img} source={require('../assets/dolar.png')}
                        resizeMode="contain"
                    />
                    <Text style={styles.price}>Deu error ao pegar o valor!</Text>
                    <Button name="Recarregar" onPress={() => getDolarScreen()} />
                </>

            }

            {!loading && !error &&
                <>
                    <Image style={styles.img} source={require('../assets/dolar.png')}
                        resizeMode="contain"
                    />
                    <Text style={styles.info}>Atualmente o valor do dolar é:</Text>
                    <Text style={styles.price}>R$ {dolar.toFixed(2)}</Text>
                    <Button name="Recarregar" onPress={() => getDolarScreen()} />
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