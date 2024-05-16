import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import dfinityImage from '../src/assets/dfinity.png'

function ApplicationForm() {
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doc = new jsPDF();

    doc.addImage(dfinityImage, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
    doc.setLineWidth(2); // Adjust border width as needed
    doc.setDrawColor(0); // Black color
    doc.rect(5, 5, doc.internal.pageSize.getWidth() - 10, doc.internal.pageSize.getHeight() - 10, 'S'); // 'S' option for stroke
  
    doc.setFontSize(16);
    doc.text(`First Name: ${fname}`, 20, 40); 
    doc.text(`Last Name: ${lname}`, 20, 50);
    doc.text(`Email: ${email}`, 20, 60);
    doc.text(`Message: ${message}`, 20, 70); 

    doc.save('application-response.pdf');
  };

  return (
    <div className='border-gray-100 text-white m-4 flex bg-gray-950 justify-between gap-x-16 max-w-full w-md px-12 py-4'>
      <div className='flex flex-col justify-center font-white'>
        <p className='text-7xl'>Get in touch</p>
        <p>Fill out the given form and we'll get back to you as soon as possible.</p>
      </div>
      <div className='flex flex-col text-sm'>
        <form id="form-container" onSubmit={handleSubmit} className="space-y-4 text-black">
          <div className='flex gap-x-5'>
            <div>
              <label className="block text-white">First Name:</label>
              <input type="text" value={fname} onChange={(e) => setfName(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full text-black" placeholder='Enter your first name' required />
            </div>
            <div>
              <label className="block text-white">Last Name:</label>
              <input type="text" value={lname} onChange={(e) => setlName(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" placeholder='Enter your last name' required />
            </div>
          </div>
          <div>
            <label className="block text-white">Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" placeholder='Enter your email' required />
          </div>
          <div>
            <label className="block text-white">Message:</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" placeholder='Enter your message' required />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;
