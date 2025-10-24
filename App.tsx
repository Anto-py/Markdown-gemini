
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import TextInput from './components/TextInput';
import MarkdownOutput from './components/MarkdownOutput';
import Button from './components/Button';
import Loader from './components/Loader';
import { convertToMarkdown } from './services/geminiService';

const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [markdownText, setMarkdownText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleConvert = useCallback(async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to convert.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setMarkdownText('');
    try {
      const result = await convertToMarkdown(inputText);
      setMarkdownText(result);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(`Failed to convert text. ${errorMessage}`);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [inputText]);

  const handleDownload = useCallback(() => {
    if (!markdownText) return;

    const blob = new Blob([markdownText], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'transcription.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [markdownText]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TextInput
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type or paste your plain text here..."
            disabled={isLoading}
          />
          <MarkdownOutput
            markdownText={markdownText}
            isLoading={isLoading}
            onDownload={handleDownload}
          />
        </div>
        <div className="mt-8 flex flex-col items-center">
          <Button
            onClick={handleConvert}
            disabled={isLoading || !inputText.trim()}
            className="w-full max-w-xs"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <Loader />
                <span className="ml-2">Converting...</span>
              </div>
            ) : (
              'Convert to Markdown'
            )}
          </Button>
          {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
        </div>
      </main>
    </div>
  );
};

export default App;
