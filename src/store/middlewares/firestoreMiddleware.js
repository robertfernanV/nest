import Firebase from "../../firebase/firebaseConfig";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";

const firestoreMiddleware = (store) => {
  let lastFetchedTimestamp = null;

  return (next) => (action) => {
    if (action.type === "APP/INITIALIZE") {
      Firebase.getInstance().then((firebase) => {
        lastFetchedTimestamp = new Date();
        try {
          const childrenActivitiesCollection = collection(
            firebase.db,
            "childrenActivities"
          );

          const childrenQuery = query(
            childrenActivitiesCollection,
            where("createdAt", ">", lastFetchedTimestamp),
            orderBy("createdAt")
          );

          const unsubscribe = onSnapshot(childrenQuery, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
              if (change.type === "added") {
                console.log({ change: change.doc.data() });
              }
            });
          });

          // Si se necesita desuscribirse en algún momento
          store.unsubscribeFirestore = unsubscribe;
        } catch (error) {
          console.log({ error });
        }
      });
    }
    return next(action);
  };
};

export default firestoreMiddleware;
