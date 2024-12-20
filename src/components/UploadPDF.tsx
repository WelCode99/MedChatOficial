
import React, { useState } from 'react';

export const UploadPDF = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  const handleUpload = async () => {
    // Função para processar e armazenar os PDFs
    // ...código para fazer upload dos arquivos e atualizar a base de dados...
  };

  return (
    <div>
      <input type="file" accept="application/pdf" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Fazer Upload</button>
      {files.length > 0 && (
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};