import { StyleSheet, Pressable } from "react-native";

type IconButtonProps = {
  icon: React.ReactNode;
  onPress: () => void;
};

export default function IconButton({ icon, onPress }: IconButtonProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {icon}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gainsboro",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
