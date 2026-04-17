import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CrypyoJS from 'crypto-js'

function App() {
  const [textoACifrar, setTextoACifrar] = useState('')
  const [textoCifrado, setTextoCifrado] = useState('')
  const [textoADescifrar, setTextoADescifrar] = useState('')
  const [textoDescifrado, setTextoDescifrado] = useState('')

  const cifrar=(texto)=>{
    var textoCifrado = CrypyoJS.AES.encrypt(texto, '12345678').toString();
    return textoCifrado;
  }
  const descifrar=(texto)=>{
    var bytes  = CrypyoJS.AES.decrypt(texto, '12345678');
    var textoDescifrado = bytes.toString(CrypyoJS.enc.Utf8);
    return textoDescifrado;
  }

  const handleCifrar = () => {
    const cifrado = cifrar(textoACifrar)
    setTextoCifrado(cifrado)
  }

  const handleDescifrar = () => {
    const descifrado = descifrar(textoADescifrar)
    setTextoDescifrado(descifrado)
  }

  return (
    <>
    <div className="App">
      <h2>Cifrar Mensaje</h2>
      <input 
        type="text" 
        value={textoACifrar} 
        onChange={(e) => setTextoACifrar(e.target.value)} 
        placeholder="Ingresa el mensaje a cifrar" 
      />
      <button onClick={handleCifrar}>Cifrar</button>
      <p>Texto Cifrado: {textoCifrado}</p>
      <br/>
      <h2>Descifrar Mensaje</h2>
      <input 
        type="text" 
        value={textoADescifrar} 
        onChange={(e) => setTextoADescifrar(e.target.value)} 
        placeholder="Pega el string cifrado aquí" 
      />
      <button onClick={handleDescifrar}>Descifrar</button>
      <p>Texto Descifrado: {textoDescifrado}</p>
      <br/>
    </div>
    </>
  )
}

export default App
