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
  page: { margin: 10, padding: 10 },
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
    <div>
      <h1>PDF Generator App</h1>
      <p>Click the button below to generate and download the PDF.</p>

      {/* Conditionally render the PDFViewer and PDFDownloadLink only when on the client-side */}
      {isClient ? (
        <>
          <div>
            <PDFDownloadLink
              document={<MyDocument />}
              fileName="myDocument.pdf"
            >
              <button>Download PDF</button>
            </PDFDownloadLink>
          </div>
          <div>
            <PDFViewer>
              <MyDocument />
            </PDFViewer>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
