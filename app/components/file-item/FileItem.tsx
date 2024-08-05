"use client";
import React from "react";
import DeleteFileButton from "../delete-file-button/DeleteFileButton";
import "./FileItem.scss";
interface FileItemProps {
  file: File;
}

export default function FileItem({ file }: any) {
  console.log(file[0]);

  function truncateString(str: string) {
    console.log(str);

    const maxLength = 20;
    if (str.length <= maxLength) {
      return str;
    }
    return str.slice(0, maxLength) + "...";
  }
  return (
    <div className="file-item">
      {truncateString(file[0].name)}
      <DeleteFileButton file={file} />
    </div>
  );
}
