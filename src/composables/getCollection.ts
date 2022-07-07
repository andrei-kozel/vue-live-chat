import { ref } from "vue";
import { db } from "@/firebase/config";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { IMessage } from "@/types";

const getCollection = (col: string) => {
  const error = ref<string | null>(null);
  const messages = ref<Array<IMessage>>([]);

  const colRef = query(collection(db, col), orderBy("createdAt"));

  onSnapshot(colRef, (snapshot) => {
    const msgs: Array<IMessage> = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    snapshot.docs.forEach((msg: any) => {
      msgs.push({ ...msg.data(), id: msg.id });
    });

    messages.value = msgs;
    error.value = null;
  });

  return { error, messages };
};

export default getCollection;
