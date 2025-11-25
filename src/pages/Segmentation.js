import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ImagePicker from "./segmentation/components/ImagePicker";
import SegmentationControls from "./segmentation/components/SegmentationControls";
import PreviewPanel from "./segmentation/components/PreviewPanel";
import OriginalView from "./segmentation/components/OriginalView";
import MaskView from "./segmentation/components/MaskView";
import OverlayView from "./segmentation/components/OverlayView";
import { useSegmentation } from "./segmentation/hooks/useSegmentation";
import { useOverlay } from "./segmentation/hooks/useOverlay";
import "./Segmentation.css";

function Segmentation() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [displayHeight, setDisplayHeight] = useState(300);
  const [showTimeoutModal, setShowTimeoutModal] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);
  const timeoutRef = useRef(null);
  const {
    runSegmentation,
    maskUrl: resultUrl,
    loading,
    error,
    reset,
  } = useSegmentation();

  const overlayUrl = useOverlay({
    originalUrl: previewUrl,
    maskUrl: resultUrl,
    tint: "rgba(0,123,255,0.4)",
  });

  // Monitor loading time and show timeout message after 5 seconds
  useEffect(() => {
    if (loading) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Set timeout for 5 seconds
      timeoutRef.current = setTimeout(() => {
        setShowTimeoutModal(true);
        setIsTimeout(true);
      }, 5000);
    } else {
      // Clear timeout when loading stops
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setShowTimeoutModal(false);
      setIsTimeout(false);
    }

    // Cleanup on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [loading]);

  // when user selects a file
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    // Clear previous results when new file is selected
    reset();
    setOverlayVisible(true);
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      const img = new Image();
      img.onload = () => {
        if (img.naturalWidth && img.naturalHeight) {
          const h = Math.round((img.naturalHeight / img.naturalWidth) * 300);
          setDisplayHeight(Number.isFinite(h) && h > 0 ? h : 300);
        }
      };
      img.src = URL.createObjectURL(file);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return alert("Please select an image first!");
    setOverlayVisible(true);
    runSegmentation(selectedFile);
  };

  return (
    <div className="segmentation-page">
      <div className="segmentation-container">
        <div className="segmentation-header">
          <Link to="/" className="back-link">← Back to Portfolio</Link>
          <h2 className="segmentation-title">Image Segmentation Portal</h2>
          <p className="segmentation-subtitle">
            Upload an image and use SAM (Segment Anything Model) to generate segmentation masks
          </p>
        </div>

        <div className="segmentation-controls-wrapper">
          <ImagePicker onChange={handleFileChange} />
          <SegmentationControls 
            onSegment={handleUpload} 
            loading={loading && !isTimeout}
            disabled={isTimeout}
          />
        </div>

        {error && (
          <div className="error-message">
            Error: {error}
          </div>
        )}

        {/* Timeout Modal */}
        {showTimeoutModal && (
          <div className="timeout-modal-overlay" onClick={() => setShowTimeoutModal(false)}>
            <div className="timeout-modal" onClick={(e) => e.stopPropagation()}>
              <button 
                className="timeout-modal-close"
                onClick={() => setShowTimeoutModal(false)}
                aria-label="Close"
              >
                ×
              </button>
              <div className="timeout-modal-content">
                <h3 className="timeout-modal-title">Processing Time Notice</h3>
                <p className="timeout-modal-text">
                The current segmentation runs on limited cloud CPU, which may take quite a bit(might also get stuck). 
                GPU acceleration would be much faster, but unfortunately, it costs money to enable it. Please refer to the demonstration video below for an idea of expected performance and output.
                </p>
                <div className="timeout-modal-video">
                  <video 
                    controls 
                    className="reference-video"
                    preload="metadata"
                  >
                    <source 
                      src={`${process.env.PUBLIC_URL}/videos/SegmentationDemo.mov`} 
                      type="video/quicktime" 
                    />
                    <source 
                      src={`${process.env.PUBLIC_URL}/videos/SegmentationDemo.mov`} 
                      type="video/mp4" 
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <button 
                  className="timeout-modal-close-btn"
                  onClick={() => setShowTimeoutModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {(previewUrl || resultUrl || overlayUrl) && (
          <PreviewPanel>
            <OriginalView src={previewUrl} height={displayHeight} />
            <MaskView 
              loading={loading} 
              src={resultUrl} 
              height={displayHeight}
              isTimeout={isTimeout}
              onOpenModal={() => setShowTimeoutModal(true)}
            />
            <OverlayView
              loading={loading}
              overlayVisible={overlayVisible}
              setOverlayVisible={setOverlayVisible}
              overlayUrl={overlayUrl}
              fallbackOriginalUrl={previewUrl}
              height={displayHeight}
              isTimeout={isTimeout}
              onOpenModal={() => setShowTimeoutModal(true)}
            />
          </PreviewPanel>
        )}
      </div>
    </div>
  );
}

export default Segmentation;

