"use client";
import React, { ChangeEvent, useEffect } from "react";
import "./FileInput.scss";

import { FileContext } from "./FileContext";
import FileList from "../file-list/FileList";
import { BsFileEarmarkPost } from "react-icons/bs";

const FileInput = ({
  onChange,
  Home,
}: {
  onChange: (files: File[]) => void;
  Home: any;
}) => {
  const [files, setFiles] = React.useState<File[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileUploaded: any = event.target.files;
    if (fileUploaded) {
      for (let index = 0; index < fileUploaded.length; index++) {
        setFiles((prevArray) => [...prevArray, fileUploaded[index]]);
      }
    }
  };

  useEffect(() => {
    onChange(files);
  }, [files]);

  return (
    <FileContext.Provider
      value={{ files, setFiles: (newFiles) => setFiles(newFiles) }}
    >
      <div className="file-data">
        <input type="file" defaultValue={""} multiple onChange={handleChange} />
        <div className="file-area">
          <div className="no-files absolute-center top-file-area">
            <div>
              <BsFileEarmarkPost />
              {Home.attach_files}
              <br />({Home.attach_files_description})
            </div>
            {files.length !== 0 && (
              <>
                <FileList files={files} />
              </>
            )}
          </div>
        </div>
      </div>
    </FileContext.Provider>
  );
};

export default FileInput;
