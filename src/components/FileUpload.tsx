import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { Box, Button, Typography } from '@mui/material';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

interface FileUploadProps {
  title: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({ title }) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    if (selectedFile && selectedFile.size > MAX_FILE_SIZE) {
      setUploadStatus(`File size exceeds ${MAX_FILE_SIZE / 1024 / 1024} MB`);
      return;
    }
    setFile(selectedFile);
    setUploadStatus(selectedFile ? 'File chosen' : '');
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadStatus('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus('File uploaded successfully');
    } catch (error) {
      setUploadStatus('Failed to upload file');
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="200px"
      bgcolor="background.paper"
      borderRadius={2}
      boxShadow={2}
      p={3}
    >
      <Box mb={4}>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box display="flex" alignItems="center" mb={2}>
        <Button
          variant="contained"
          component="label"
          color="primary"
          sx={{
            mr: 2,
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
          Choose File
          <input type="file" onChange={handleFileChange} hidden />
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpload}
        >
          Upload
        </Button>
      </Box>
      {uploadStatus && (
        <Typography
          variant="body1"
          color={
            uploadStatus.includes('Failed')
              ? 'error'
              : uploadStatus === 'File chosen'
              ? 'primary'
              : 'success'
          }
        >
          {uploadStatus}
        </Typography>
      )}
    </Box>
  );
};

export default FileUpload;
