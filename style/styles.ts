import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    borderColor: "#f5f5f5",
  },
  profileImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
    marginTop: 50,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "cornflowerblue",
  },
  buttonImage: {
    marginTop: 20,
  },
});

const stylesPractice = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ffffff",
  },
  footer: {
    backgroundColor: "#f8f8f8",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  header: {
    backgroundColor: "#AEC6CF",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitleText: {
    fontSize: 16,
    color: "#fff",
  },
  content: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 16,
    paddingHorizontal: 8,
    width: "80%",
    borderRadius: 8,
  },
});

const stylesLogin = StyleSheet.create({
  container: {
  justifyContent: "center",
  padding: 20,
  marginTop: 50,
  backgroundColor: '#ffffff', // ต้งัค่าสีพ้ืนหลงัเป็นสีขาว
  borderRadius: 10, // เพิ่มความมนให้กบัขอบคอนเทนเนอร์
  elevation: 3, // เพิ่มเงาให้กบัคอนเทนเนอร์(เฉพาะ Android)
  width: '100%', // ต้งัความกวา้งของ container ให้เต็มหน้าจอ
  },
  input: {
  height: 45, // เพิ่มความสูงของ TextInput
  borderColor: "gray", // เปลี่ยนสีขอบเป็นสีเทาอ่อน
  borderWidth: 1, 
  borderRadius: 8, // เพิ่มความมนให้กบัขอบ TextInput
  marginBottom: 15, // เพิ่มระยะห่างดา้นล่างระหวา่ ง TextInput
  paddingHorizontal: 15, // เพิ่มระยะห่างภายใน TextInput
  backgroundColor: "#f9f9f9", // ต้งัค่าสีพ้ืนหลงัของ TextInput
  }, 
  });

  const stylesCreatePost = StyleSheet.create({
    container: {
      padding: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
    },
    postContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 50,
    },
    postText: {
      margin: 10,
      fontSize: 16,
    },
    postContent: {
      color: "blue", // เปลี่ยนสีข้อความที่ถูกส่งกลับมา
      fontWeight: "bold",
    },
  });
  
  const logoStyle = StyleSheet.create ({
    logo: {
      width: 70,
      height: 50
    }
  });

export { styles, stylesPractice, stylesLogin,stylesCreatePost };
