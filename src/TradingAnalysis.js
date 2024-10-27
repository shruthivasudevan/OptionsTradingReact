import React, { useState } from 'react';
import { FaFileExcel } from 'react-icons/fa'; // XLS icon

const TradingAnalysis = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const fileDate = new Date(file.lastModified);
      setLastUpdated(fileDate.toLocaleString()); // Display timestamp when file was last modified
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      // Handle the file upload logic here
      // alert(`File uploaded: ${selectedFile.name}`);
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <div className="content">
      <h2>Trading Analysis</h2>
      {/* Section 1: Title */}
      <div className="section-block">
        <p>Please upload your past trading history in the format of a Google or Excel sheet.</p>
        <p>There will be no output, but this feature coming soon!</p>
      </div>

      {/* Section 2: File Upload Form */}
      <div className="section-block">
            <p>
                {lastUpdated ? 'Last Updated: '+ lastUpdated : ''}
            </p>
        <form onSubmit={handleSubmit}>
            <div className="drag-drop">
                {/* XLS Events List with Icon */}
                <div className="events-list">
                    
                </div>
                <p><FaFileExcel style={{ marginRight: '10px', color: '#217346' }} />Events List</p>
                <p>Drag and drop your file here...</p>
                <p>Permitted File Types Include: XLS, XLSX, CSV</p>
                <label htmlFor="file-upload" className="custom-file-upload">
                    Select File to Upload
                </label>
                <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileChange}
                    accept=".xls, .xlsx, .csv"
                />
            </div>  
          <button type="submit" className='submit-btn'>Upload File</button>
        </form>
      </div>

    </div>
  );
};

export default TradingAnalysis;
