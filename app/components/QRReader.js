import React, { useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

const QRReaderComponent = () => {
  const [qrData, setQrData] = useState("");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: 250 },
      false
    );
    scanner.render(
      (decodedText) => {
        setQrData(decodedText);
        scanner.clear();
      },
      (error) => {
        console.error("QR Scan Error:", error);
      }
    );

    return () => {
      scanner.clear();
    };
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">QR Code Reader</h1>
      <div
        id="reader"
        className="w-80 h-80 border border-gray-300 rounded mb-4"
      ></div>
      {qrData && (
        <a
          href={qrData}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700"
        >
          {qrData}
        </a>
      )}
    </div>
  );
};

export default QRReaderComponent;
