import Spinner from "./Spinner";

export default function MaskView({ loading, src, height, isTimeout, onOpenModal }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Mask</h3>
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
            onClick={onOpenModal}
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
      {!loading && src && (
        <>
          <img src={src} alt="mask" style={{ width: "100%", maxWidth: 300, borderRadius: "8px", boxShadow: "0 0 8px rgba(0,0,0,0.2)" }} />
          <div style={{ marginTop: "0.5rem" }}>
            <a href={src} download="mask.png" style={{ textDecoration: "none" }}>
              <button style={{ padding: "0.35rem 0.75rem", backgroundColor: "#198754", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Download Mask</button>
            </a>
          </div>
        </>
      )}
      {!loading && !src && !isTimeout && (
        <div style={{ width: "100%", maxWidth: 300, height, margin: "0 auto", borderRadius: "8px", boxShadow: "0 0 8px rgba(0,0,0,0.05)", background: "#f8f9fa" }} />
      )}
    </div>
  );
}

