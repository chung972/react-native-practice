import Reactotron, {openInEditor} from "reactotron-react-native";

Reactotron
.configure({port: 9090})
.useReactNative()
.use(openInEditor());
// for openInEditor documentation: https://github.com/infinitered/reactotron/blob/master/docs/plugin-open-in-editor.md