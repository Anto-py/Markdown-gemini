
import React from 'react';
import Button from './Button';
import Loader from './Loader';

interface MarkdownOutputProps {
  markdownText: string;
  isLoading: boolean;
  onDownload: () => void;
}

const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdownText, isLoading, onDownload }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-2">
        <label htmlFor="output-text" className="text-lg font-semibold text-cyan-400">Markdown Output</label>
        <Button
            onClick={onDownload}
            disabled={!markdownText || isLoading}
            className="px-3 py-1 text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Download .md
        </Button>
      </div>
      <div className="flex-grow w-full p-4 bg-slate-800 border-2 border-dashed border-slate-700 rounded-lg shadow-inner min-h-[400px] md:min-h-[500px] relative overflow-auto">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-800/50">
            <Loader />
          </div>
        ) : markdownText ? (
          <pre className="whitespace-pre-wrap break-words text-slate-300">{markdownText}</pre>
        ) : (
          <div className="flex items-center justify-center h-full text-slate-500">
            Your converted Markdown will appear here...
          </div>
        )}
      </div>
    </div>
  );
};

export default MarkdownOutput;
