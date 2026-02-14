import { useState } from "react";
import "./App.css";

function App() {
  const [idx, setIdx] = useState(0);
  const [size, setSize] = useState(50);
  const [isYesPressed, setIsYesPressed] = useState(false);
  const [isOkPressed, setIsOkPressed] = useState(false);
  const buttonTexts = [
    "no",
    "ily",
    "i hope your doing well🍓",
    "i love you berry much🍒,
    "how are you? ",
    "let's catch up soon pls 💫",
    "YESYES ",
    "let's have a coffee date again☕",
    "share your stories with me✨",
    "yes please",
    "i miss you so much",
    "💐💐💐",
    "💗💗💗",
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 max-w-0">
        {!isYesPressed && (
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">
              Happy Valentines, my dearest mj 💐💓
            </h1>
            <h3>💗/h3>
          </div>
        )}
        {!isYesPressed && (
          <div className="flex gap-4 items-end">
            <a
              target="_blank"
              href="https://https://www.instagram.com/p/DUovrrtiUX0/?igsh=amR5amFoYXB2MXN2
            >
              <button
                onClick={() => setIsYesPressed(true)}
                style={{ height: size, width: idx > 0 ? size : undefined }}
                className="bg-green-500! text-white px-4 py-2 rounded-md"
              >
                yes
              </button>
            </a>
            {idx < buttonTexts.length && (
              <button
                style={{ height: idx === 0 ? 50 : undefined }}
                onClick={() => {
                  setSize(size + 50);
                  setIdx(idx + 1);
                }}
                className="bg-red-500! text-white px-4 py-2 rounded-md"
              >
                {buttonTexts[idx]}
              </button>
            )}
          </div>
        )}
        {idx > buttonTexts.length && !isYesPressed && (
          <div className="w-screen">
            ✨💗
          </div>
        )}
      </div>
      {isYesPressed && !isOkPressed && (
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col gap-4 text-xs">
            wishing you well, mem💓
          </div>
          <button
            onClick={() => setIsOkPressed(true)}
            className="bg-green-500! text-white px-4 py-2 rounded-md"
          >
            💓
          </button>
        </div>
      )}
      {isOkPressed && (
        <div className="flex flex-col items-center justify-center gap-16">
          <h1 className="flex flex-col gap-4 text-xs">
            happy valentines,dearest mayzie! i hope your day is filled with happiness and love💞
          </h1>
          <div className="flex flex-col gap-4 text-xs">
            love, <br />
            cj
          </div>
        </div>
      )}
    </>
  );
}

export default App;
