import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { ref } from "vue";
import { IRegisterUser } from "@/types";

const error = ref<string>("");

const signup = async (user: IRegisterUser) => {
  const { email, password, displayName } = user;
  error.value = "";

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(res.user, { displayName });

    if (!res) {
      throw new Error("Error creating user");
    }
  } catch (e) {
    error.value = (e as Error).message;
    console.error((e as Error).message);
  }
};

const useSignup = () => {
  return {
    error,
    signup,
  };
};

export default useSignup;
