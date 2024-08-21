import React, { useState, useEffect } from "react";

export default function Typewriter({ strings }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(200);

  const prefix = "FIL-";

  useEffect(() => {
    const handleTyping = () => {
      const word = strings[currentWordIndex];

      if (isDeleting) {
        setCurrentText((prev) => prev.substring(0, prev.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) =>
            prev === strings.length - 1 ? 0 : prev + 1
          );
        }
      } else {
        setCurrentText((prev) => word.substring(0, prev.length + 1));

        if (currentText === word) {
          setIsDeleting(true);
          setTypingSpeed(100);
        }
      }
    };

    const timeoutId = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, typingSpeed, strings, currentWordIndex]);

  useEffect(() => {
    if (!isDeleting) {
      setTypingSpeed(200);
    }
  }, [isDeleting]);

  return (
    <span>
      {prefix}
      {currentText}
    </span>
  );
}
