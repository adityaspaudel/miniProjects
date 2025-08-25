"use client";

import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "@/lib/redux/slices/languageSlice";

export default function LanguageSwitcher() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <div className="flex flex-col justify-center items-center bg-stone-400 h-screen w-screen text-black">
      <div className="p-4 flex flex-col justify-center items-center bg-yellow-300 h-1/2 w-1/2">
        <select
          value={language}
          onChange={handleLanguageChange}
          className="border px-2 py-1 rounded"
        >
          <option value="en">English</option>
          <option value="np">Nepali</option>
          <option value="hi">Hindi</option>
        </select>
        <p className="mt-4 text-lg font-semibold">
          {language === "en" && "Hello, World!"}
          {language === "np" && "नमस्ते, संसार!"}
          {language === "hi" && "नमस्ते, दुनिया!"}
        </p>
      </div>
    </div>
  );
}
