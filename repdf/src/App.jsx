import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';

// Register a font (optional)
Font.register({
  family: 'Roboto',
  src: 'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxM.woff2',
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
    fontFamily: 'Roboto',
  },
  section: {
    marginBottom: 20,
    padding: 20,
    border: '1px solid #E4E4E4',
    borderRadius: 5,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#007BFF',
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    borderBottom: '1px solid #E4E4E4',
    paddingBottom: 5,
    color: '#007BFF',
  },
  sectionContent: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333333',
  },
  personalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
  },
  downloadButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    color: '#FFFFFF',
    borderRadius: 5,
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: 16,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>John Doe's Resume</Text>
      
      {/* Personal Information Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.personalInfo}>
          <View style={styles.column}>
            <Text style={styles.sectionContent}>Name: John Doe</Text>
            <Text style={styles.sectionContent}>Email: john.doe@example.com</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.sectionContent}>Phone: +1234567890</Text>
            <Text style={styles.sectionContent}>Address: 123 Main St, City, Country</Text>
          </View>
        </View>
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.sectionContent}>B.Sc. in Computer Science</Text>
        <Text style={styles.sectionContent}>XYZ University, 2020</Text>
      </View>

      {/* Work Experience Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Experience</Text>
        <Text style={styles.sectionContent}>Software Developer at ABC Corp</Text>
        <Text style={styles.sectionContent}>Jan 2021 - Present</Text>
        <Text style={styles.sectionContent}>- Developed web applications using React and Node.js</Text>
        <Text style={styles.sectionContent}>- Collaborated with cross-functional teams</Text>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.sectionContent}>- React</Text>
        <Text style={styles.sectionContent}>- Node.js</Text>
        <Text style={styles.sectionContent}>- JavaScript</Text>
        <Text style={styles.sectionContent}>- HTML/CSS</Text>
      </View>

      {/* Download Button */}
      <Text style={styles.downloadButton} onClick={handleDownload}>Download PDF</Text>
    </Page>
  </Document>
);

// Function to handle PDF download
const handleDownload = () => {
  const blob = new Blob([<MyDocument />], { type: 'application/pdf' });
  saveAs(blob, 'resume.pdf');
};

// Main App Component
const App = () => (
  <div>
    <PDFViewer width="100%" height="600px">
      <MyDocument />
    </PDFViewer>
    {<MyDocument />}
  </div>
);

export default App;
