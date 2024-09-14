import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ActivityIndicator, ListRenderItem } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { findProductID } from "../services/product-service";
import { ListItem, Tile } from "@rneui/base";
import { Dimensions } from "react-native";

const DetailScreen = (): React.JSX.Element => {
  const [showLog, setShowLog] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<Boolean>(false);
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { id, title } = route.params as {
    id: string;
    title: string;
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    });
  }, [navigation, route]);

  const getProductsID = async () => {
    try {
      setLoading(true);
      const response = await findProductID(id);
      console.log(JSON.stringify(response.data.data));
      setShowLog(response.data.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getProductsID();
  }, []);

  const _renderItem: ListRenderItem<any> = ({ item }: { item: any }) => {
    return (
      <>
        <Tile
          imageSrc={{
            uri: "https://images2.alphacoders.com/134/1342343.png",
            cache: "force-cache",
          }}
          title={item.ch_title}
          titleStyle={styles.titleStyle}
          containerStyle={styles.tileContainer}
          caption={item.ch_dateadd}
          captionStyle={styles.captionStyle}
          featured
          activeOpacity={0.9}
          width={Dimensions.get("screen").width - 20} // ลบขอบเล็กน้อยทั้งสองข้าง
        />

        <ListItem>
          <ListItem.Content>
            <ListItem.Title>{item.ch_title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </>
    );
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={showLog}
          renderItem={_renderItem}
          keyExtractor={(item) => item.ch_id}
          refreshing={loading}
          onRefresh={getProductsID}
          // contentContainerStyle={styles.tileContainer}
        />
      )}
    </View>
  );
};
export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0", // สีพื้นหลัง
  },
  listContent: {
    paddingHorizontal: 10, // การเว้นวรรคขอบซ้ายและขวาเท่ากัน
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue", // สีขาวสำหรับชื่อ
  },
  tileContainer: {
    borderRadius: 10, //กำหนดให้มุมของ container มีความโค้งมน
    overflow: "hidden", //กำหนดให้เนื้อหาที่อาจล้นออกจากขอบของ container ไม่แสดงผล
    marginBottom: 10, //กำหนดระยะห่างจากขอบล่างของ container ไปยัง element ต่อไปที่อยู่ด้านล่าง
    elevation: 5, // เงาสำหรับ Android
    shadowOffset: { width: 0, height: 2 }, //กำหนดตำแหน่งของเงาที่แสดงผล
    shadowOpacity: 0.25, //กำหนดระดับความโปร่งแสงของเงา
    shadowRadius: 3.84, //กำหนดรัศมีของการกระจายตัวของเงา
    opacity: 0.5, // ความโปร่งใสของภาพ , ค่าน้อยจะโปร่งใสมาก
    marginLeft: 5,
  },
  captionStyle: {
    fontSize: 14,
    color: "blue", // สีขาวสำหรับวันที่
  },
});
