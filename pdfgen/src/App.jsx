import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, PDFDownloadLink,PDFViewer } from '@react-pdf/renderer';
import Roboto from '../src/fonts/Roboto-Regular.ttf';
import RobotoBold from '../src/fonts/Roboto-Bold.ttf';

Font.register({
  family: 'Roboto',
  fonts: [
    { src: Roboto }, // font-style: normal, font-weight: normal
    { src: RobotoBold, fontWeight: 'bold' }, // font-style: normal, font-weight: bold
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#404E4D',
    padding: 20,
    fontFamily: 'Roboto',
  },
  section: {
    marginBottom: 20,
    padding: 10,
    border: '1px solid #E4E4E4',
    borderRadius: 5,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 5,
    borderBottom: '1px solid #E4E4E4',
    paddingBottom: 3,
  },
  sectionContent: {
    fontSize: 14,
    marginBottom: 5,
  },
  personalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
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
    </Page>
  </Document>
);

// Main App Component
const App = () => (
  <div >
    <PDFViewer width="100%" height="600" showToolbar="false" style={{ margin:20}}>
      <MyDocument/>
    </PDFViewer>
    <PDFDownloadLink
      document={<MyDocument />}
      fileName="resume.pdf"
      style={{
        textDecoration: 'none',
        padding: '10px 20px',
        color: '#fff',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '4px',
      }}
    >
      {({ loading }) => (loading ? 'Generating document...' : 'Download Resume')}
    </PDFDownloadLink>
  </div>
);

export default App;
