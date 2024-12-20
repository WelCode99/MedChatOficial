
import pdfParse from 'pdf-parse';

export const processPDFs = async (pdfFiles: Buffer[]) => {
  const processedData = [];
  for (const file of pdfFiles) {
    const data = await pdfParse(file);
    processedData.push(data.text);
  }
  return processedData;
};