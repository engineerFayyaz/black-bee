import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { collection, addDoc, doc, setDoc,getDoc } from 'firebase/firestore';
import { db } from '../FirebaseConfig';

const ImportData = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const generateRandomImage = () => {
    // Replace this with your logic to generate a random image URL
    return 'https://via.placeholder.com/150';
  };

  const importData = async () => {
    try {
      if (!file) {
        console.error('No file selected.');
        return;
      }
  
      // Read the JSON file
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const jsonData = JSON.parse(event.target.result);
  
          for (const collectionName in jsonData) {
            const collectionRef = collection(db, collectionName);
            const collectionData = jsonData[collectionName];
  
            for (const key in collectionData) {
              const documentData = collectionData[key];
              // Add a random image URL if image field is missing
              if (!documentData.image) {
                documentData.image = generateRandomImage();
              }
              
              // Check if document already exists
              const docRef = doc(collectionRef, key);
              const docSnap = await getDoc(docRef);
              if (docSnap.exists()) {
                console.log(`Document with ID ${key} already exists in ${collectionName} collection. Skipping.`);
              } else {
                // Add the document to the Firestore collection
                await setDoc(docRef, documentData);
                console.log(`Document added to ${collectionName} collection with ID: ${key}`);
              }
            }
          }
  
          console.log('Data uploaded successfully to Firestore!');
        } catch (error) {
          console.error('Error adding document:', error);
        }
      };
  
      reader.readAsText(file);
    } catch (error) {
      console.error('Error importing data:', error);
    }
  };
  

  return (
    <div style={{ color: 'black', fontSize: '50px' }}>
      <h2>Fayyaz testing</h2>
      <h1>Import Data</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={importData}>Upload</button>
      <p>Importing data from selected JSON file to Firestore...</p>
    </div>
  );
};

export default ImportData;
