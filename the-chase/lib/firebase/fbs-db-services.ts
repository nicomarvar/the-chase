import { db } from "./fbs-config";
import {addDoc, collection, getDocs} from "firebase/firestore"

export async function getTest(){
    console.log("called")
    // const usersRef = collection(db,"users");
    // const data = await (await getDocs(usersRef));
    // console.log(data.docs[0])
    const docRef = await addDoc(collection(db, "users"), {
        name: "Cali",
        country: "Colombia",
      });
    console.log("Document written with ID: ", docRef.id);

}