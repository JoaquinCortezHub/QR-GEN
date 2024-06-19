import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QRCode from 'qrcode';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Footer from './components/Footer/Footer';

function App() {
  const [url, setUrl] = useState<string | null>(null);
  const [qrcode, setQrCode] = useState<string | null>(null);

  const checkValidURL = (urlString: string) => {
    try {
      new URL(urlString);
      return true;
    }
    catch (error) {
      return false;
    }
  }

  const generateQRCode = () => {
    if(url && checkValidURL(url)) {
      QRCode.toDataURL(url, {
        width: 800,
        margin: 2,
      }, (error, url) => {
        if (error) {
          toast.error('Failed to generate QR code');
        }
        setQrCode(url);
        toast.success('QR code generated!');
      })
    }
    else {
      toast.error('Invalid input. Enter a valid URL');
    }
  };

  const handleDownload = () => {
    if(qrcode) {
      toast.success('QR code downloaded!');
    }
  }

  return (
    <div className='app'>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
      />
      <Header/>
      <Input url= {url} setUrl={setUrl} qrcode={generateQRCode} />
      {qrcode && 
        <>
          <img  className='img' src={qrcode} alt='Generated QR code'/>
          <a  className='download' href={qrcode} download='qrcode.png' onClick={handleDownload}>Download</a>
        </>
      }
      <Footer/>
    </div>
  )

}

export default App
