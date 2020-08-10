const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello Olamide!");
});

const createNotification = (notification) => {
  return admin.firestore
    .Collection("notifications")
    .add(notification)
    .then((doc) => console.log("notification added", doc));
};

export const projectCreated = functions.firestore
  .document("project/{projectId}")
  .onCreate((doc) => {
    const project = doc.data();
    const notification = {
      content: "Added a new project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };

    return createNotification(notification);
  });

export const userJoined = functions
  .auth.user().onCreate((user) => {
    return admin.firestore().Collection('users')
      .doc(user.uid).get().then((doc) => {
        const newUser = doc.data();
        const notification = {
          content: 'Joined the party',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
      })
  });
