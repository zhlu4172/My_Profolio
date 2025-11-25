import Spinner from "./Spinner";

export default function SegmentationControls({ onSegment, loading, disabled }) {
  const isDisabled = disabled || loading;
  
  return (
    <button
      onClick={onSegment}
      disabled={isDisabled}
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: isDisabled ? "not-allowed" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        opacity: isDisabled ? 0.5 : 1,
      }}
    >
      {loading && !disabled ? (
        <>
          <Spinner size={16} color="white" borderWidth={2} />
          <span>Segmenting...</span>
        </>
      ) : (
        "Segment Image"
      )}
    </button>
  );
}

