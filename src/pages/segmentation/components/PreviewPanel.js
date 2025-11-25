export default function PreviewPanel({ children }) {
  return (
    <div
      className="preview-panel"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1rem",
        width: "100%",
        marginTop: "1rem",
      }}
    >
      {children}
    </div>
  );
}

