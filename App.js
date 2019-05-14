import React from "react";
import { Botao } from "./components/Botao.js";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";



export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { r: 0 };
        this.btn = this.btn.bind(this);
    }

    btn(b) {
        let s = this.state;
        if (b == "C") {
            s.r = "0";
        } else if (b == "=") {
            s.r = eval(s.r);
        } else if (b == "<") {
            // funcao apagar alagarismo
            if (s.r.length == 1) {
                s.r = "0";
            } else {
                s.r = s.r.slice(0, s.r.length - 1); // exclui o ultimo algarismo
            }
        } else {
            if (s.r == "0") {
                //condicao inicial
                s.r = b; // substitui o 0 pelo valor apertado
            } else {
                s.r += b; // caso ja tenha numero, concatena com o numero apertado
            }
        }

        this.setState(s);
    }

    render() {
        return (
            <View style={styles.body}>
                <View style={styles.linha}>
                    <Text style={styles.res}>{this.state.r}</Text>
                </View>
                <View style={styles.linha}>
                    <Botao n="c" c="2" bg="#ccc" onPress={() => { this.btn("C"); }} />
                    <Botao n="<" bg="#ccc" onPress={() => { this.btn("<"); }} />
                    <Botao n="/" bg="#fd9536" onPress={() => { this.btn("/"); }} />
                </View>
                <View style={styles.linha}>
                    <Botao n="7" onPress={() => { this.btn("7"); }} />
                    <Botao n="8" onPress={() => { this.btn("8"); }} />
                    <Botao n="9" onPress={() => { this.btn("9"); }} />
                    <Botao n="*" bg="#fd9536" onPress={() => { this.btn("*"); }} />
                </View>
                <View style={styles.linha}>
                    <Botao n="4" onPress={() => { this.btn("4"); }} />
                    <Botao n="5" onPress={() => { this.btn("5"); }} />
                    <Botao n="6" onPress={() => { this.btn("6"); }} />
                    <Botao n="-" bg="#fd9536" onPress={() => { this.btn("-"); }} ></Botao>
                </View>
                <View style={styles.linha}>
                    <Botao n="1" onPress={() => { this.btn("1"); }} />
                    <Botao n="2" onPress={() => { this.btn("2"); }} />
                    <Botao n="3" onPress={() => { this.btn("3"); }} />
                    <Botao n="+" bg="#fd9536" onPress={() => { this.btn("+"); }} />
                </View>
                <View style={styles.linha}>
                    <Botao c="2" n="0" onPress={() => { this.btn("0"); }} />
                    <Botao n="." onPress={() => { this.btn("."); }} />
                    <Botao n="=" bg="#fd9536" onPress={() => { this.btn("="); }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingTop: 25,
        backgroundColor: '#fff',

    },
    linha: {
        flex: 1,
        flexDirection: "row"
    },
    res: {
        backgroundColor: "#000",
        color: "white",
        fontSize: 50,
        flex: 1,
        textAlign: "right"
    }
});
