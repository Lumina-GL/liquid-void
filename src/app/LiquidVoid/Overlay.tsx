"use client";

const Overlay = () => {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none", 
      zIndex: 10,
      padding: "40px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      fontFamily: "'Inter', sans-serif",
      color: "#fff",
      textTransform: "uppercase",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: "14px", fontWeight: 900, letterSpacing: "0.3em" }}>
            LAB_EXPERIMENT // 001
          </h1>
        </div>
      </div>

      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: -1,
        opacity: 0.03,
        fontSize: "25vw",
        fontWeight: 900,
        pointerEvents: "none",
        color: "#fff"
      }}>
        VOID
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ fontSize: "10px", lineHeight: "1.6" }}>
          <span style={{ opacity: 0.4 }}>STATUS:</span> <span style={{ color: "#00ffaa" }}>STABLE_CORE</span><br />
          <span style={{ opacity: 0.4 }}>TEMP:</span> 32.4°C<br />
          <span style={{ opacity: 0.4 }}>LOCATION:</span> [ 23.2599° N, 77.4126° E ]
        </div>
        
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "40px", fontWeight: 200, marginBottom: "-10px" }}>001</div>
          <div style={{ fontSize: "10px", opacity: 0.5, letterSpacing: "4px" }}>LIQUID_VOID</div>
        </div>
      </div>

      <div style={{
        position: "absolute",
        right: "40px",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        opacity: 0.3
      }}>
        {[1, 2, 3].map((i) => (
          <div key={i} style={{ width: "2px", height: "40px", background: "#fff" }} />
        ))}
      </div>
    </div>
  );
};

export default Overlay;

