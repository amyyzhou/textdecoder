'use client';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(false);

  const analyzeMessage = async () => {
    if (!message.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      
      const data = await response.json();
      setAnalysis(data.analysis);
    } catch (err) {
      console.error('Error analyzing message:', err);
      setAnalysis('Sorry, something went wrong while analyzing the message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 md:p-24 max-w-4xl mx-auto">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-pink-500">Text Decoder</h1>
          <p className="text-pink-400">
            A program that prevents my delusional girl friends from being delusional.
          </p>
          <p className="text-gray-500 text-sm">
            brought to you by yours truly, amy zhou
            <br />
            <a 
              href="https://x.com/_amyyzhou" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-500 transition-colors"
            >
              @_amyyzhou
            </a>
          </p>
        </div>

        <div className="space-y-4">
          <textarea
            className="w-full p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-pink-400 focus:border-transparent min-h-[120px] resize-none"
            placeholder="Paste the text message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          
          <button
            onClick={analyzeMessage}
            disabled={loading || !message.trim()}
            className="w-full bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Analyzing...' : 'Decode Message'}
          </button>
        </div>

        {analysis && (
          <div className="bg-white p-6 rounded-lg shadow-lg border border-pink-100">
            <h2 className="text-lg font-semibold mb-3 text-pink-500">Analysis:</h2>
            <p className="text-gray-700 whitespace-pre-wrap">{analysis}</p>
          </div>
        )}
      </div>
    </main>
  );
}
