import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface CircularProgressProps {
  size?: number;
  strokeWidth?: number;
  percentage: number; // 0 a 100
  color: string;
  icon?: React.ReactNode;
}

export function CircularProgress({
  size = 90,
  strokeWidth = 8,
  percentage,
  color,
  icon,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = circumference - (circumference * percentage) / 100;

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size}>
        {/* Fundo */}
        <Circle
          stroke="#2A2A2E"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />

        {/* Progresso */}
        <Circle
          stroke={color}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>

      {/* Conteúdo central */}
      <View style={styles.center}>
        {icon}
        <Text style={styles.percent}>{percentage}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  percent: {
    color: "#FFF",
    fontSize: 14,
    marginTop: 4,
    fontWeight: "600",
  },
});
