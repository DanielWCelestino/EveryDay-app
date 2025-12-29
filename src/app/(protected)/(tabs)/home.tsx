import { AreaProgressCard } from "@/app/components/home/Card";
import { useAuth } from "@/app/hooks/useAuth";
import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>

          <TouchableOpacity style={styles.logout} onPress={signOut}>
            <Ionicons name="log-out-outline" size={38} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('Clicou na água')} style={styles.copo}>
            <Ionicons name="water" size={38} color="white" />
          </TouchableOpacity>

          <View style={{ flex: 1, marginTop: 20 }}>
            <View style={{ alignSelf: 'center', marginTop: 24 }}>
              <View style={styles.profileImage}>
                <Image
                  source={require('@/../assets/images/contato.png')}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>

              <TouchableOpacity style={styles.add}>
                <Ionicons
                  name="add"
                  size={48}
                  color="#fff"
                  style={{ marginTop: 6, marginLeft: 2 }}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.text}>
                Usuario
              </Text>
            </View>




            <View style={styles.statsContainer}>
              <View style={styles.statsBoxx}>
                <Text style={styles.text}>4</Text>
                <Text style={styles.subTitleCard}>Sessões hoje</Text>
              </View>

              <View style={styles.statsBox}>
                <Text style={styles.text}>1h 15min</Text>
                <Text style={styles.subTitleCard}>Tempo hoje</Text>
              </View>

              <View style={styles.statsBoxx}>
                <Text style={styles.text}>20h</Text>
                <Text style={styles.subTitleCard}>Meta semanal</Text>
              </View>
            </View>
          </View>

          <View style={styles.cardsContainer}>

            <AreaProgressCard
              title="Intelectual"
              plannedHours={5}
              spentMinutes={0}
              percentage={70}
              color="#3bbf86"
              icon={
                <Ionicons name="book" size={24} color="#fff" />
              }
              onPress={() => console.log("Intelectual")}
            />
            <AreaProgressCard
              title="Profissional"
              plannedHours={5}
              spentMinutes={0}
              percentage={70}
              color="#3597cf"
              icon={
                <Ionicons name="stats-chart" size={24} color="#fff" />
              }
              onPress={() => console.log("Profissional")}
            />
            <AreaProgressCard
              title="Social"
              plannedHours={5}
              spentMinutes={0}
              percentage={10}
              color="#f2941f"
              icon={
                <Ionicons name="people" size={24} color="#fff" />
              }
              onPress={() => console.log("Social")}
            />
            <AreaProgressCard
              title="Fisico"
              plannedHours={12}
              spentMinutes={3}
              percentage={16}
              color="#e24e4f"
              icon={
                <Ionicons name="fitness" size={24} color="#fff" />
              }
              onPress={() => console.log("Fisico")}
            />

          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollContent: {
    paddingBottom: 32,
  },
  header: {
    paddingTop: 64,
    paddingBottom: 24,
  },
  logout: {
    position: 'absolute',
    top: 70,
    right: 25,
  },
  copo: {
    top: 70,
    left: 25,
    borderRadius: 15,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 360,
    borderWidth: 5,
    borderColor: '#fff',
  },
  add: {
    backgroundColor: '#41444B',
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  statsContainer: {
    gap: 12,
    width: 420,
    height: 80,
    padding: 12,
    margin: 12,
    borderRadius: 16,
    flexDirection: "row",
    backgroundColor: "#222222ff"
  },
  statsBox: {
    flex: 1,
    gap: 6,
    alignItems: 'center',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#DFD8C8',
  },
  statsBoxx: {
    flex: 1,
    gap: 6,
    alignItems: 'center',
    borderColor: '#DFD8C8',
  },
  subText: {
    color: '#fff',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '200',
    fontFamily: 'helveticaNeue',
  },
  subTitleCard: {
    color: "#a7a7a7ff",
    fontSize: 14
  },
  cardsContainer: {
    paddingHorizontal: 16,
    marginTop: 12,
  }

});
