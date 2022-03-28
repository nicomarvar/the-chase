import { db } from "./fbs-config";
import { doc, collection, setDoc, getDocs, getDoc, deleteDoc, updateDoc } from "firebase/firestore"
import { uid } from "uid";

export async function getAllDocsFromCollection(coll:string){
    console.log("called")
    const usersRef = collection(db, coll);
    const data = await getDocs(usersRef);
    console.log(data.docs[0])
    console.log("All Documents from collection: ", coll);    
}

export async function getDocWithIDFromCollection(coll:string, id:string){
    console.log("called")
    const docRef = doc(db, coll, id);
    const query = await getDoc(docRef);
    const data = query.data()
    console.log(`Document with id: ${id} from collection ${coll}: `, data);    
}

export async function updateDocWithIDFromCollection(coll:string, id:string, data: any){
    console.log("called")
    const docRef = doc(db, coll, id);
    const update = await updateDoc(docRef, data);
    const query = await getDoc(docRef);
    const _data = query.data()
    console.log(`Document with id: ${id} from collection ${coll} has been updated to: `, _data);    
}

export async function createDocumentinCollection(coll:string, data:any){
    console.log("called")
    const id = uid(8)
    const newDoc = await setDoc(doc(db, coll, id), {
        ...data,
        id: id
    });
   console.log(`Document created in ${coll} collection with ID: ${id} and this content: `, data);
}

export async function deleteDocWithIDFromCollection(coll:string, id:string){
    console.log("called")
    const docRef = doc(db, coll, id);
    const suprDoc = await deleteDoc(docRef);
    console.log(`Document with id: ${id} from collection ${coll} has been deleted`);
}