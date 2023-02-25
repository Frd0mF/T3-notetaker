import { useState } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

const NoteEditor = ({
  onSave,
}: {
  onSave: (note: { title: string; content: string }) => void;
}) => {
  const [code, setCode] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          <input
            type="text"
            placeholder="Note title"
            className="input-primary input input-lg w-full font-bold"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </h2>
        <CodeMirror
          value={code}
          width="500px"
          height="30vh"
          minWidth="100%"
          minHeight="30vh"
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
          onChange={(value) => setCode(value)}
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.5",
            padding: "1rem",
            background: "#2A303C",
          }}
          className="border border-gray-200"
        />
      </div>
      <div className="card-actions justify-end">
        <button
          className="btn-primary btn mx-8 mb-3"
          onClick={() => {
            onSave({ title, content: code });
            setCode("");
            setTitle("");
          }}
          disabled={title.trim().length === 0 || code.trim().length === 0}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default NoteEditor;
