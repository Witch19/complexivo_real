import { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { getMenus } from "../api/mongo.api";

export default function MovieCatalogScreen() {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getMenus()
      .then((data) => setMovies(data))
      .catch(() => setError("Error cargando cartelera"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>{error}</Text>;

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item._id?.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.name}</Text>
          <Text>{item.category}</Text>
          <Text>{item.price} </Text>
        </View>
      )}
    />
  );
}