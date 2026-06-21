import { useState, useRef, useEffect } from 'react';
import './AIToolbox.css';

const TABS = [
  { key: 'ask', label: 'Ask Emma', icon: 'chat_bubble' },
  { key: 'match', label: 'Skill Match', icon: 'analytics' },
];

const SUGGESTED = [
  "What is Emma's current role?",
  "What are Emma's key technical skills?",
  "Tell me about Emma's ML research.",
  "Why would Emma be a great hire?",
];

async function callAPI(tool, messages, jd = '') {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tool, messages, jd }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `Request failed (${res.status})`);
  }
  const data = await res.json();
  return data.text;
}

/* ── Ask Emma Tab ────────────────────────────────── */
function AskEmma() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const send = async (text) => {
    const userMsg = { role: 'user', content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput('');
    setLoading(true);
    setError('');
    try {
      const reply = await callAPI('ask', next);
      setMessages([...next, { role: 'assistant', content: reply }]);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !loading) send(input.trim());
  };

  return (
    <div className="tool-panel">
      <div className="chat-area">
        {messages.length === 0 && (
          <div className="chat-empty">
            <span className="material-symbols-rounded chat-empty-icon">smart_toy</span>
            <p>Ask me anything about Emma — her experience, skills, or background.</p>
            <div className="suggested-chips">
              {SUGGESTED.map((q) => (
                <button key={q} className="chip" onClick={() => send(q)}>
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`chat-message chat-message--${m.role}`}>
            {m.role === 'assistant' && (
              <span className="material-symbols-rounded msg-avatar">smart_toy</span>
            )}
            <div className="msg-bubble">{m.content}</div>
          </div>
        ))}

        {loading && (
          <div className="chat-message chat-message--assistant">
            <span className="material-symbols-rounded msg-avatar">smart_toy</span>
            <div className="msg-bubble msg-bubble--typing">
              <span /><span /><span />
            </div>
          </div>
        )}
        {error && <p className="tool-error">{error}</p>}
        <div ref={bottomRef} />
      </div>

      <form className="chat-input-row" onSubmit={handleSubmit}>
        <input
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something about Emma…"
          disabled={loading}
        />
        <button className="chat-send-btn" type="submit" disabled={loading || !input.trim()}>
          <span className="material-symbols-rounded">send</span>
        </button>
      </form>
    </div>
  );
}

/* ── Shared single-shot tool panel ───────────────── */
function GeneratorTool({ tool, placeholder, buttonLabel, buttonIcon }) {
  const [jd, setJd] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const run = async () => {
    if (!jd.trim() || loading) return;
    setLoading(true);
    setResult('');
    setError('');
    try {
      const messages = [{ role: 'user', content: `Here is the job description:\n\n${jd}` }];
      const text = await callAPI(tool, messages, jd);
      setResult(text);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="tool-panel tool-panel--generator">
      <div className="generator-input-section">
        <label className="generator-label">Paste the Job Description</label>
        <textarea
          className="generator-textarea"
          value={jd}
          onChange={(e) => setJd(e.target.value)}
          placeholder={placeholder}
          rows={10}
        />
        <button className="generator-btn" onClick={run} disabled={loading || !jd.trim()}>
          {loading ? (
            <>
              <span className="material-symbols-rounded spin">progress_activity</span>
              Generating…
            </>
          ) : (
            <>
              <span className="material-symbols-rounded">{buttonIcon}</span>
              {buttonLabel}
            </>
          )}
        </button>
        {error && <p className="tool-error">{error}</p>}
      </div>

      {result && (
        <div className="generator-result">
          <div className="result-header">
            <span className="result-label">Result</span>
            <button className="copy-btn" onClick={copy}>
              <span className="material-symbols-rounded">
                {copied ? 'check' : 'content_copy'}
              </span>
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <div className="result-body">{result}</div>
        </div>
      )}
    </div>
  );
}

/* ── Main Page ───────────────────────────────────── */
const AIToolbox = () => {
  const [activeTab, setActiveTab] = useState('ask');

  return (
    <div className="toolbox-page">
      <div className="container">

        <header className="toolbox-header">
          <span className="toolbox-badge">
            <span className="material-symbols-rounded">auto_awesome</span>
            Powered by Groq
          </span>
          <h1 className="toolbox-title">AI Toolbox</h1>
          <p className="toolbox-subtitle">
            Three AI tools built on Emma's background — ask questions, draft a cover letter, or check your JD against her profile.
          </p>
        </header>

        <div className="tab-bar">
          {TABS.map((t) => (
            <button
              key={t.key}
              className={`tab-btn ${activeTab === t.key ? 'tab-btn--active' : ''}`}
              onClick={() => setActiveTab(t.key)}
            >
              <span className="material-symbols-rounded">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {activeTab === 'ask' && <AskEmma />}
          {activeTab === 'match' && (
            <GeneratorTool
              tool="skillmatch"
              placeholder="Paste the full job description here…"
              buttonLabel="Analyse Match"
              buttonIcon="analytics"
            />
          )}
        </div>

      </div>
    </div>
  );
};

export default AIToolbox;
