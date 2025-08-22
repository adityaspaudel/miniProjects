"use client";

import React, { useState, useEffect } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  PDFViewer,
} from "@react-pdf/renderer";

// Create styles for the PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 30,
    fontFamily: "Helvetica",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
    textAlign: "justify",
  },
});

// Create the PDF document component
// This component defines the structure and content of your PDF
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text>Simple PDF Document</Text>
        <Text>
          This is a sample document generated with @react-pdf/renderer. You can
          use this library to create dynamic, styled PDF documents directly from
          your React components. This example demonstrates a basic page with
          some text. You can expand on this by adding images, tables, charts, or
          other complex layouts.
        </Text>
      </View>
    </Page>
  </Document>
);

// The main application component
const App = () => {
  // We use a state variable to track if the component has mounted on the client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect runs only on the client-side after the component has mounted
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col gap-4 content-center items-center bg-amber-600 min-h-screen w-screen">
      <h1>PDF Generator App</h1>
      <p>Click the button below to generate and download the PDF.</p>

      {/* Conditionally render the PDFViewer and PDFDownloadLink only when on the client-side */}
      {isClient ? (
        <div className="h-1/2 w-1/2">
          <div>
            <PDFDownloadLink
              document={<MyDocument />}
              fileName="myDocument.pdf"
            >
              <button className="bg-green-300 hover:bg-green-400 rounded-sm p-2">
                Download PDF
              </button>
            </PDFDownloadLink>
          </div>
          <div className="border-2 border-amber-200 h-96 w-full">
            <PDFViewer width="100%" height="100%">
              <MyDocument />
            </PDFViewer>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
