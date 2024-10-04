import React, { useState } from "react";

interface imageProps {
  setFile: any;
  files: any;
  className: string;
}

export const ImageUpload = ({ setFile, files, className }: imageProps) => {
  const [styles, setStyles] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const onChange = (e: any) => {
    let files = e.target.files;
    if (typeof setFile !== "function") {
      throw new Error(
        `setFile must be function. ${typeof setFile} given instead`
      );
    }
    setFile(files);
    if (files.length > 0) {
      const imageUrl = URL.createObjectURL(files[0]);
      setPreview(imageUrl);
    }
    setStyles("border-2 border-red-800");
  };
  const onDrop = (e: any) => {
    e.preventDefault();
    let files = e.dataTransfer.files;
    if (typeof setFile !== "function") {
      throw new Error(
        `setFile must be function. ${typeof setFile} given instead`
      );
    }
    setFile(files);
    setStyles("border-2 border-primary");
  };
  const onDragOver = (e: any) => {
    setStyles(" bg-primary");
  };
  const onDragLeave = () => {
    setStyles("");
  };
  console.log(files);
  return (
    <div
      className={`w-2/6 bg-black m-3 rounded-md bg-secondary text-primary h-48 py-2 items-center flex flex-col justify-center cursor-pointer relative ${styles} ${className}`}
    >
      {preview && (
        <div className="w-full h-full ">
          <img
            className="w-full h-full object-cover "
            src={preview}
            alt="preview"
          />

          <div className="absolute inset-0 text-white text-bold flex justify-center items-center ">
            <p>Change image</p>
            </div>
        </div>
      )}
      <span className="font-bold text-xl">
        {" "}
        {!!!files?.length && "+ Upload Image "}
      </span>
      <span className="font- text-sm text-center p-2">
        {!!!files?.length && `Drag and drop an image or click here`}
      </span>

      <input
        type="file"
        className="opacity-0  block absolute left-0 top-0 z-10 w-full h-full"
        accept="image/*"
        onChange={onChange}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
      />
      <div></div>
    </div>
  );
};
