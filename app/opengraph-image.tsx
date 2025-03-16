import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Consulto - Strategic Business Consulting"
export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#1e40af",
        padding: "40px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "#3b82f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            marginRight: "20px",
            fontSize: "48px",
          }}
        >
          C
        </div>
        <div style={{ fontSize: "72px", fontWeight: "bold" }}>Consulto</div>
      </div>
      <div style={{ fontSize: "36px", color: "#64748b", textAlign: "center" }}>Strategic Business Consulting</div>
    </div>,
    {
      ...size,
    },
  )
}

