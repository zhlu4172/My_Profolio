import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FloatingChat.css';

const SUGGESTED = [
  "What is Emma's current role?",
  "What are Emma's key skills?",
  "Why should I hire Emma?",
];

const FloatingChat = () => {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Emma's AI assistant. Ask me about her experience, skills, or anything else — I know her profile inside out." },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading, open]);

  const send = async (text) => {
    const next = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tool: 'ask', messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: 'assistant', content: data.text || 'Something went wrong.' }]);
    } catch {
      setMessages([...next, { role: 'assistant', content: 'Unable to reach the server. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !loading) send(input.trim());
  };

  return (
    <div className="fc-root">
      {/* Chat panel */}
      <div className={`fc-panel ${open ? 'fc-panel--open' : ''}`}>
        <div className="fc-header">
          <div className="fc-header-left">
            <span className="material-symbols-rounded fc-header-icon">smart_toy</span>
            <div>
              <div className="fc-header-title">Ask Emma</div>
              <div className="fc-header-sub">Powered by Groq</div>
            </div>
          </div>
          <div className="fc-header-actions">
            <Link to="/ai-tools" className="fc-skillmatch-btn" onClick={() => setOpen(false)} title="Skill Match tool">
              <span className="material-symbols-rounded">analytics</span>
            </Link>
            <button className="fc-close-btn" onClick={() => setOpen(false)}>
              <span className="material-symbols-rounded">close</span>
            </button>
          </div>
        </div>

        <div className="fc-messages">
          {messages.map((m, i) => (
            <div key={i} className={`fc-msg fc-msg--${m.role}`}>
              {m.content}
            </div>
          ))}

          {messages.length === 1 && !loading && (
            <div className="fc-chips">
              {SUGGESTED.map((q) => (
                <button key={q} className="fc-chip" onClick={() => send(q)}>
                  {q}
                </button>
              ))}
            </div>
          )}

          {loading && (
            <div className="fc-msg fc-msg--assistant fc-msg--typing">
              <span /><span /><span />
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <form className="fc-input-row" onSubmit={handleSubmit}>
          <input
            className="fc-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something…"
            disabled={loading}
          />
          <button className="fc-send" type="submit" disabled={loading || !input.trim()}>
            <span className="material-symbols-rounded">send</span>
          </button>
        </form>
      </div>

      {/* Trigger button */}
      <button
        className={`fc-trigger ${open ? 'fc-trigger--open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat with Emma's AI"
      >
        <span className="material-symbols-rounded fc-trigger-icon fc-trigger-icon--chat">chat_bubble</span>
        <span className="material-symbols-rounded fc-trigger-icon fc-trigger-icon--close">close</span>
        {!open && <span className="fc-trigger-label">Ask Emma</span>}
      </button>
    </div>
  );
};

export default FloatingChat;
