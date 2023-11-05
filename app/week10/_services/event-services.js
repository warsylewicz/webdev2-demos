import { db } from "../_utils/firebase"; // import Firebase config

import {
  collection,
  addDoc,
  getDoc,
  onSnapshot,
  query,
  doc,
  where,
} from "firebase/firestore";

// Function to listen for real-time updates on all events
export const subscribeToEvents = (onUpdate) => {
  try {
    const colRef = collection(db, "events");
    // const q = query(colRef, where("date", ">", new Date())); // only get events that have not yet occurred

    return onSnapshot(colRef, (snapshot) => {
      const events = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // convert Firestore Timestamp to JS Date
      events.forEach((event) => {
        event.date = event.date.toDate();
        event.date.setDate(event.date.getDate() + 1); // terrible hack to fix timezone issue, better solution is to use moment.js
      });

      onUpdate(events);
    });
  } catch (error) {
    console.error("Error in subscribeToEvents: ", error);
  }
};

// Get one event by id
export const getEvent = async (id) => {
  try {
    const docRef = doc(db, "events", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const event = { id: docSnap.id, ...docSnap.data() };

      // convert Firestore Timestamp to JS Date and make sure it is MST
      event.date = event.date.toDate();
      event.date.setDate(event.date.getDate() + 1); // terrible hack to fix timezone issue, better solution is to use moment.js
      return event;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error in getEvent: ", error);
  }
};

// Add a new event
export const addEvent = async (event) => {
  try {
    // Ensure the event object contains necessary fields before attempting to add to the collection
    if (!event.name || !event.date || !event.location) {
      throw new Error(
        "The event object is missing required fields (name, date, or location)."
      );
    }

    const eventCollection = collection(db, "events");
    const docRef = await addDoc(eventCollection, event);
    return docRef.id;
  } catch (error) {
    console.error("Error in addEvent:", error);
  }
};
