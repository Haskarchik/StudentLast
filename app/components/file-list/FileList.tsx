'use client'
import FileItem from '../file-item/FileItem';
import './FileList.scss';

interface FileListProps {
  files: File[];
}

export default function FileList({ files }: FileListProps) {
  
  return (
    <div className="file-list-wrapper">
      {files.map((file, index) => (
        <FileItem key={index} file={file} />
      ))}
    </div>
  );
}
