import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore"

export const firebaseConfig = {
    apiKey: process.env.FBS_KEY,
    authDomain: process.env.NEXT_PUBLIC_FBS_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DBURL,
    projectId: process.env.NEXT_PUBLIC_FBS_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_FBS_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FBS_MESSAGINGID,
    appId: process.env.NEXT_PUBLIC_FBS_APPID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
