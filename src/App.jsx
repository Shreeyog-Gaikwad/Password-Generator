import { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  const copyPass = useRef(null);

  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (isNumber) {
      str += "0123456789";
    }

    if (isSymbol) {
      str += "!@#$%^&*()_+~`|}{[]:;?>"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

    pass = "";

  }, [length, isNumber, isSymbol, setPassword]);

  useEffect(()=>{
    passwordGenerator();
  },[length, isNumber, isSymbol, passwordGenerator]);

  const copyToClipBoard = useCallback(()=>{
    copyPass.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  

  return (
    <div className='w-[100vw] h-[100vh] bg-gray-400 flex items-center justify-center flex-col gap-24'>
      <div className='text-6xl text-black font-bold italic'>Password Generator</div>
      <div className='w-lvh h-72 bg-gray-700 rounded-2xl flex items-center justify-center flex-col gap-16 border-3 border-blue-300'>
        <div className='w-[90%] h-10 bg-white rounded-lg flex border-blue-300 border-3'>
          <input type="text" className='w-[90%] px-5 ' value={password} placeholder="Password" readOnly ref={copyPass}/>
          <button className='bg-blue-500 w-[10%] rounded-lg cursor-pointer' onClick={copyToClipBoard}>Copy</button>
        </div>
        <div className='w-[90%] h-14 flex items-center justify-center gap-11'>
          <div className='flex gap-3 text-white'>
            <input type="range" name="length" id="length" value={length} className='cursor-pointer' min={6} max={100} onChange={e => { setLength(e.target.value) }} />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className='flex gap-3 text-white'>
            <input type="checkbox" name="number" id="number" value={isNumber} onChange={()=>{setIsNumber((prev)=>!prev)}} />
            <label htmlFor="number"> Add Numbers</label>
          </div>
          <div className='flex gap-3 text-white'>
            <input type="checkbox" name="symbol" id="symbol" value={isSymbol} onChange={()=>{setIsSymbol((prev)=>!prev)}} />
            <label htmlFor="symbol"> Add Symbols</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
