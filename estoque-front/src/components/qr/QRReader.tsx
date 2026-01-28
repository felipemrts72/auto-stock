import { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRReader: React.FC = () => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'reader',
      { fps: 10, qrbox: 250 },
      false
    );

    scanner.render(
      (text: string) => {
        alert(text);
        scanner.clear();
      },
      () => {}
    );
  }, []);

  return <div id="reader" />;
};

export default QRReader;
