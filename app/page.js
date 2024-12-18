"use client";
import React, { useState } from "react";
import QRGenerator from "./components/QRGenerator";
import QRReaderComponent from "./components/QRReader";

const App = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="flex flex-col items-center p-6 h-screen justify-center">
      <h1 className="text-3xl font-bold mb-6">QR Code App</h1>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveComponent("generate")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Generate QR
        </button>
        <button
          onClick={() => setActiveComponent("read")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Read QR
        </button>
      </div>
      <div className="w-full max-w-md">
        {activeComponent === "generate" && <QRGenerator />}
        {activeComponent === "read" && <QRReaderComponent />}
      </div>
    </div>
  );
};

export default App;
