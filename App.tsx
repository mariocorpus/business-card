import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Linking,
  FlatList,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import IconButton from "@/components/IconButton";
import TextButton from "@/components/TextButton";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

import data from "@/data";

export default function App() {
  const handleSocial = (social: string) => Linking.openURL(social);

  const handleContactMe = () => Linking.openURL(`mailto:${data.email}`);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screen} edges={["bottom"]}>
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <Image
            style={styles.banner}
            source={{
              uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg",
            }}
          />

          <View style={styles.contentContainer}>
            <View style={styles.profileContainer}>
              <Image
                style={styles.avatar}
                source={{ uri: "https://i.pravatar.cc/300" }}
              />
              <Text style={styles.name}>{data.name}</Text>
              <Text style={styles.occupation}>{data.occupation}</Text>
            </View>

            <View style={styles.socialsContainer}>
              <IconButton
                icon={<FontAwesome6 name="github" size={20} color="black" />}
                onPress={() => handleSocial(data.social.github)}
              />
              <IconButton
                icon={<FontAwesome6 name="linkedin" size={20} color="black" />}
                onPress={() => handleSocial(data.social.linkedin)}
              />
              <IconButton
                icon={<FontAwesome6 name="link" size={20} color="black" />}
                onPress={() => handleSocial(data.social.website)}
              />
            </View>

            <Text style={styles.bio}>{data.bio}</Text>

            <TextButton text="Contact Me" onPress={handleContactMe} />
          </View>

          <Section title="My Projects">
            <FlatList
              contentContainerStyle={styles.projectsContainer}
              data={data.projects}
              renderItem={({ item }) => <ProjectCard {...item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </Section>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  banner: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  contentContainer: {
    marginTop: -70,
    marginBottom: 20,
    paddingHorizontal: 12,
    alignItems: "center",
    gap: 20,
  },
  profileContainer: {
    alignItems: "center",
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: "white",
  },
  name: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
  },
  occupation: {
    color: "grey",
  },
  socialsContainer: {
    flexDirection: "row",
    gap: 28,
  },
  bio: {
    color: "black",
    fontSize: 16,
    lineHeight: 24,
  },
  projectsContainer: {
    gap: 12,
    paddingHorizontal: 12,
  },
});
