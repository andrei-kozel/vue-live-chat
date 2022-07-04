import { ref } from "vue";
import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { IChatMessage } from "@/types";

const error = ref<string | null>(null);
const colRef = collection(db, "messages");

const sendMessage = async (message: IChatMessage) => {
  error.value = null;

  try {
    await addDoc(colRef, message);
  } catch (e) {
    error.value = "Could not send the message!";
  }
};

const useMessages = () => {
  return { error, sendMessage };
};

export default useMessages;
