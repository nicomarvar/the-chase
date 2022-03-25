import { db } from "./fbs-config";
import {doc,setDoc, collection, getDocs} from "firebase/firestore"
import { uid } from "uid";

export async function getTest(){
    console.log("called")
    const id = uid(8)
    // const usersRef = collection(db,"users");
    // const data = await (await getDocs(usersRef));
    // console.log(data.docs[0])
    const docRef = await setDoc(doc(db, "users", id), {
        name: "Cali",
        country: "Colombia",
        id: id
      });
    console.log("Document written with ID: ", id);

}