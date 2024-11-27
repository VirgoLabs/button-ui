import React, { useState } from "react";
import {
    TouchableOpacity,
    Text,
    ActivityIndicator,
    View,
    StyleSheet,
    GestureResponderEvent,
    ViewStyle,
    TextStyle,
    useColorScheme,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

interface ButtonProps {
    title: string;
    onPress?: (event: GestureResponderEvent) => void;
    disabled?: boolean;
    loading?: boolean;
    icon?: keyof typeof Ionicons.glyphMap;
    iconPosition?: "left" | "right";
    style?: ViewStyle;
    textStyle?: TextStyle;
    loadingIndicatorColor?: string;
    raised?: boolean;
    borderRadius?: number;
    borderWidth?: number;
    borderColor?: string;
    size?: "small" | "medium" | "large";
    variant?: "outlined" | "solid" | "ghost";
    activeOpacity?: number;
    underlayColor?: string;
    onLongPress?: (event: GestureResponderEvent) => void;
    testID?: string;
}

const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    disabled = false,
    loading = false,
    icon,
    iconPosition = "left",
    style,
    textStyle,
    loadingIndicatorColor = "#C0C0C0",
    raised = false,
    borderRadius = 8,
    borderWidth = 0,
    borderColor,
    size = "medium",
    variant = "solid",
    activeOpacity = 0.7,
    underlayColor,
    onLongPress,
    testID,
}) => {
    const [pressed, setPressed] = useState(false);
    const colorScheme = useColorScheme();
    const currentColors = Colors[colorScheme || "light"];

    underlayColor = underlayColor || currentColors.presstint;
    borderColor = borderColor || currentColors.tint;
    loadingIndicatorColor = loadingIndicatorColor || currentColors.text
    
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            disabled={disabled || loading}
            style={[
                styles.button,
                style,
                raised && styles.raised,
                borderRadius ? { borderRadius } : {},
                borderWidth ? { borderWidth } : {},
                borderColor ? { borderColor } : {},
                disabled && styles.disabled,
                { 
                    backgroundColor: pressed ? underlayColor : currentColors.tint,
                },
                variant === "outlined" && { ...styles.outlined, borderColor, backgroundColor: 'transparent' },
                variant === "ghost" && styles.ghost,
                size === "small" && styles.small,
                size === "large" && styles.large,
            ]}
            activeOpacity={activeOpacity}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            testID={testID}
        >
            <View style={styles.content}>
                {icon && iconPosition === "left" && (
                    <Ionicons name={icon} size={24} color={currentColors.text} />
                )}
                {loading ? (
                    <ActivityIndicator size="small" color={loadingIndicatorColor} />
                ) : (
                    <Text style={[styles.text, textStyle, { color: currentColors.text }]}>{title}</Text>
                )}
                {icon && iconPosition === "right" && (
                    <Ionicons name={icon} size={24} color={currentColors.text} />
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        minWidth: 100,
    },
    raised: {
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    disabled: {
        backgroundColor: "gray",
    },
    outlined: {
        backgroundColor: "transparent",
        borderWidth: 2,
    },
    ghost: {
        backgroundColor: "transparent",
    },
    small: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    large: {
        paddingVertical: 16,
        paddingHorizontal: 32,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Button;
