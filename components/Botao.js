import React from "react";
import { StyleSheet, Text, TouchableOpacity, } from "react-native";

export class Botao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        let c = 1;
        if (props.c) {
            c = parseInt(props.c);
        }
        let bg = "#e0e0e0";
        if (props.bg) {
            bg = props.bg;
        }

        this.styles = StyleSheet.create({
            area: {
                flex: c,
                justifyContent: "center",
                alignItems: "center",
                margin: 0.5,
                borderColor: "#999",
                backgroundColor: bg,
                borderRadius: 2,
            },
            text: {
                fontSize: 18
            }
        });
    }
    render() {
        return (
            <TouchableOpacity style={this.styles.area}
                onPress={this.props.onPress}
            >
                <Text style={this.styles.text}>{this.props.n}</Text>
            </TouchableOpacity>
        );
    }
}