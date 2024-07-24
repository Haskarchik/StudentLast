'use client'
import React from 'react';
import DeleteFileButton from '../delete-file-button/DeleteFileButton';
import './FileItem.scss';
interface FileItemProps {
  file: File;
}

export default function FileItem({ file }: FileItemProps) {
  return (
    <div className="file-item">
      {file.name}
      <DeleteFileButton file={file} />
    </div>
  );
}
