import React, { useState } from 'react';
import { BlobProvider, Document, Page, Text, View, StyleSheet, Font, Image ,PDFViewer} from '@react-pdf/renderer';
import Roboto from '../src/fonts/Roboto-Regular.ttf';
import RobotoBold from '../src/fonts/Roboto-Bold.ttf';
import BackgroundImage from '../src/assets/dfinity.png'; // Replace with your image path

Font.register({
  family: 'Roboto',
  fonts: [
    { src: Roboto }, // font-style: normal, font-weight: normal
    { src: RobotoBold, fontWeight: 'bold' }, // font-style: normal, font-weight: bold
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#f8f9fa',
    padding: 20,
    fontFamily: 'Roboto',
  },
  background: {
    position: 'absolute',
    minHeight: '100%',
    minWidth: '100%',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.3,
  },
  section: {
    marginBottom: 20,
    padding: 10,
    border: '1px solid #E4E4E4',
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 5,
    borderBottom: '1px solid #E4E4E4',
    paddingBottom: 3,
    fontWeight: 'bold',
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

const MyDocument = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image style={styles.background} src={BackgroundImage} />
      <Text style={styles.header}>{`${formData.firstName} ${formData.lastName}'s Resume`}</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.personalInfo}>
          <View style={styles.column}>
            <Text style={styles.sectionContent}>Name: {`${formData.firstName} ${formData.lastName}`}</Text>
            <Text style={styles.sectionContent}>Email: {formData.email}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.sectionContent}>Phone: {formData.phone}</Text>
            <Text style={styles.sectionContent}>Address: {formData.address}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.sectionContent}>{formData.education}</Text>
        <Text style={styles.sectionContent}>{formData.institution}, {formData.graduationYear}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Experience</Text>
        <Text style={styles.sectionContent}>{formData.jobTitle} at {formData.company}</Text>
        <Text style={styles.sectionContent}>{formData.startDate} - {formData.endDate}</Text>
        <Text style={styles.sectionContent}>- {formData.responsibilities}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        {formData.skills.split(',').map((skill, index) => (
          <Text key={index} style={styles.sectionContent}>- {skill.trim()}</Text>
        ))}
      </View>
    </Page>
  </Document>
);

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    institution: '',
    graduationYear: '',
    jobTitle: '',
    company: '',
    startDate: '',
    endDate: '',
    responsibilities: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Additional logic can be added here if needed
  };

  return (
    <div style={{ padding: 20 }}>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <span className='font-bold text-3xl text-center'>Resume Builder</span>
        
       
       <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>
<div>
          <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </label>
</div>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          Education:
          <input type="text" name="education" value={formData.education} onChange={handleChange} required />
        </label>
        <label>
          Institution:
          <input type="text" name="institution" value={formData.institution} onChange={handleChange} required />
        </label>
        <label>
          Graduation Year:
          <input type="text" name="graduationYear" value={formData.graduationYear} onChange={handleChange} required />
        </label>
        <label>
          Job Title:
          <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
        </label>
        <label>
          Company:
          <input type="text" name="company" value={formData.company} onChange={handleChange} required />
        </label>
        <label>
          Start Date:
          <input type="text" name="startDate" value={formData.startDate} onChange={handleChange} required />
        </label>
        <label>
          End Date:
          <input type="text" name="endDate" value={formData.endDate} onChange={handleChange} required />
        </label>
        <label>
          Responsibilities:
          <textarea name="responsibilities" value={formData.responsibilities} onChange={handleChange} required></textarea>
        </label>
        <label>
          Skills (comma separated):
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} required />
        </label>
        <button type="submit">Generate PDF</button>
      </form>

      <BlobProvider document={<MyDocument formData={formData} />}>
        {({ blob, url, loading, error }) => {
          if (loading) return 'Generating document...';
          if (error) return 'Error generating document';
          return (
            <a
              href={url}
              download="resume.pdf"
              style={{
                textDecoration: 'none',
                padding: '10px 20px',
                color: '#fff',
                backgroundColor: '#007BFF',
                border: 'none',
                borderRadius: '4px',
                display: 'block',
                margin: '20px',
                textAlign: 'center',
              }}
            >
              Download Resume
            </a>
          );
        }}
      </BlobProvider>
      {/* <PDFViewer>
        <MyDocument/>
      </PDFViewer> */}
    </div>
  );
};

export default App;
