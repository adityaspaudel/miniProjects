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
      <div className="p-4 flex flex-col content-center gap-2 items-center bg-yellow-300 h-1/2 w-1/2 rounded-xl">
        <div>
          <h1 className="text-4xl font-bold">Language Switcher App</h1>
          <hr className="border-black" />
        </div>

        <select
          value={language}
          onChange={handleLanguageChange}
          className="border px-2 py-1 rounded"
        >
          <option value="en">English</option>
          <option value="np">Nepali</option>
          <option value="hi">Hindi</option>
        </select>
        <div className="mt-4 text-lg font-semibold">
          {language === "en" && (
            <div>Hello, World! Welcome you to our language switcher app.</div>
          )}
          {language === "np" && (
            <div>नमस्ते, संसार! हमारे भाषा स्विचर ऐप में आपका स्वागत है।</div>
          )}
          {language === "hi" && (
            <div>नमस्ते, दुनिया! हाम्रो भाषा स्विचर एपमा स्वागत छ।</div>
          )}
        </div>
      </div>
    </div>
  );
}
