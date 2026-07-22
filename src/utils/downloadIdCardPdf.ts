export async function downloadIdCardPdf(): Promise<void> {
  const pdfFileName = 'DOC-20260608-WA0045.pdf';
  const pdfPath = `/${pdfFileName}`;

  try {
    const response = await fetch(pdfPath);
    if (!response.ok) {
      throw new Error(`Failed to load file: ${response.statusText}`);
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = pdfFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (err) {
    console.error('Error initiating PDF download:', err);
    // Direct link fallback
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = pdfFileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

