import { ref } from "vue";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "@/firebase/config";
import { ILoginUser } from "@/types";

const error = ref<string>("");

const login = async (user: ILoginUser) => {
  const { email, password } = user;

  error.value = "";

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res);
  } catch (e) {
    error.value = (e as Error).message;
    console.error((e as Error).message);
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
