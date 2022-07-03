import { ref } from "vue";
import { auth } from "@/firebase/config";
import { signOut } from "@firebase/auth";

const error = ref<string>("");

const logout = async () => {
  try {
    error.value = "";
    await signOut(auth);
  } catch (e) {
    error.value = (e as Error).message;
    console.log((e as Error).message);
  }
};

const useLogout = () => {
  return { error, logout };
};

export default useLogout;
