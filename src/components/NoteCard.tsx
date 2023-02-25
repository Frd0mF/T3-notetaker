import { useState } from "react";

import ReactMarkdown from "react-markdown";

import { type RouterOutputs } from "~/utils/api";

type Note = RouterOutputs["note"]["getAll"][0];

const NoteCard = ({ note, onDelete }: { note: Note; onDelete: () => void }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body m-0 p-3">
        <div
          className={`collapse-arrow ${isExpanded ? "collapse-open" : ""}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="collapse-title text-xl font-bold">{note.title}</div>
          <div className="collapse-content">
            <article className="prose lg:prose-xl">
              <ReactMarkdown>{note.content}</ReactMarkdown>
            </article>
          </div>
        </div>
      </div>
      <div className="card-actions mx-6 my-3  flex justify-end py-3">
        <button
          className="btn-error btn-sm rounded-sm text-white"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
