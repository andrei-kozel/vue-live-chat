import { auth } from "../firebase/config";
import { ref } from "vue";
import { User, onAuthStateChanged } from "@firebase/auth";

const user = ref<User | null>(auth.currentUser);

onAuthStateChanged(auth, (_user) => {
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
