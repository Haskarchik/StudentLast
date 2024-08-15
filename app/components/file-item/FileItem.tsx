"use client";
import React from "react";
import DeleteFileButton from "../delete-file-button/DeleteFileButton";
import "./FileItem.scss";
interface FileItemProps {
  file: File;
}

export default function FileItem({ file }: any) {

  function truncateString(str: string) {

    const maxLength = 20;
    if (str.length <= maxLength) {
      return str;
    }
    return str.slice(0, maxLength) + "...";
  }
  return (
    <div className="file-item">
      {truncateString(file.name)}
      <DeleteFileButton file={file} />
    </div>
  );
}
