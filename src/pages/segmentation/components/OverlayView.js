import Spinner from "./Spinner";

export default function OverlayView({ loading, overlayVisible, setOverlayVisible, overlayUrl, fallbackOriginalUrl, height, isTimeout, onOpenModal }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Overlay</h3>
      <div
        onClick={() => { if (!loading && overlayUrl) setOverlayVisible((v) => !v); }}
        role="button"
        aria-label="Toggle overlay visibility"
        title="Click to toggle overlay"
        style={{ cursor: !loading && overlayUrl ? "pointer" : "default" }}
      >
        {loading && isTimeout ? (
          <div style={{ 
            width: "100%", 
            maxWidth: 300, 
            height, 
            margin: "0 auto", 
            display: "flex", 
            flexDirection: "column",
            alignItems: "center", 
            justifyContent: "center", 
            borderRadius: "8px", 
            boxShadow: "0 0 8px rgba(0,0,0,0.1)", 
            background: "#f8f9fa",
            padding: "1rem"
          }}>
            <p style={{ color: "#718096", marginBottom: "1rem", fontSize: "0.9rem" }}>
              Not available due to limited CPU runtime
            </p>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal();
              }}
              style={{ 
                padding: "0.5rem 1rem", 
                backgroundColor: "#667eea", 
                color: "white", 
                border: "none", 
                borderRadius: "6px", 
                cursor: "pointer",
                fontSize: "0.9rem",
                fontWeight: "500"
              }}
            >
              Learn More
            </button>
          </div>
        ) : loading ? (
          <div style={{ width: "100%", maxWidth: 300, height, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px", boxShadow: "0 0 8px rgba(0,0,0,0.1)", background: "#f1f3f5" }}>
            <Spinner />
          </div>
        ) : null}
        {!loading && overlayUrl && overlayVisible && (
          <img src={overlayUrl} alt="overlay" style={{ width: "100%", maxWidth: 300, borderRadius: "8px", boxShadow: "0 0 8px rgba(0,0,0,0.2)" }} />
        )}
        {!loading && !overlayVisible && fallbackOriginalUrl && (
          <img src={fallbackOriginalUrl} alt="original" style={{ width: "100%", maxWidth: 300, borderRadius: "8px", boxShadow: "0 0 8px rgba(0,0,0,0.2)" }} />
        )}
        {!loading && overlayVisible && !overlayUrl && !isTimeout && (
          <div style={{ width: "100%", maxWidth: 300, height, margin: "0 auto", borderRadius: "8px", boxShadow: "0 0 8px rgba(0,0,0,0.05)", background: "#f8f9fa" }} />
        )}
      </div>
    </div>
  );
}

