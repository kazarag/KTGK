import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import {useMyContextController} from '../store';
const Stack = createStackNavigator();
const Router = ({ navigation }) => {
  const [controller, dispatch] = useMyContextController();
  const { userLogin } = controller;
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleStyle: { fontStyle: "italic" },
          title: "Hello " + (userLogin != null && userLogin.fullname),
          headerTitleAlign: "center",
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
};
export default Router;
