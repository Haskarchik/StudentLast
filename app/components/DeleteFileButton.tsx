'use client' 
import React, { useContext } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';
import { FileContext } from './file-input/FileContext';

interface DeleteFileButtonProps {
  file: File;
}

export default function DeleteFileButton({ file }: DeleteFileButtonProps) {
  const { files, setFiles } = useContext(FileContext);
  function handleDeleteFile() {
    setFiles(files.filter((file2) => file.name !== file2.name));
  }

  return (
    <IconButton onClick={handleDeleteFile}>
      <ClearIcon fontSize="small" />
    </IconButton>
  );
}
