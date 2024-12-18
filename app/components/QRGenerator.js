import React, { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";

const QRGenerator = () => {
  const [link, setLink] = useState("");
  const [generated, setGenerated] = useState(false);
  const qrRef = useRef();

  const handleGenerate = () => {
    setGenerated(true);
  };

  const handleDownload = () => {
    const canvas = qrRef.current.querySelector("svg");
    const url = canvas;
    const link = document.createElement("a");
    link.href = url;
    link.download = "qr-code.png";
    link.click();
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter a link"
        value={link}
        onChange={(e) => {
          setLink(e.target.value);
          setGenerated(false);
        }}
        className="border border-gray-300 rounded px-4 py-2 mb-4 w-80"
      />
      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
      >
        Generate QR
      </button>
      {generated && link && (
        <div ref={qrRef} className="shadow-lg p-4">
          <QRCodeSVG value={link} size={200} />
          <button
            onClick={handleDownload}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4"
          >
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
};

export default QRGenerator;
