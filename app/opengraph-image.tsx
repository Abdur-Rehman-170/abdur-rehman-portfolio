import { ImageResponse } from "next/og";

export const alt =
  "Abdur Rehman - AI and Machine Learning Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          backgroundColor: "#080808",
          color: "#F5F5F5",
          padding: "74px 80px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Outer frame */}
        <div
          style={{
            position: "absolute",
            top: "30px",
            right: "30px",
            bottom: "30px",
            left: "30px",
            display: "flex",
            border: "1px solid #262626",
          }}
        />

        {/* Subtle geometric lines */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "73%",
            width: "1px",
            height: "100%",
            display: "flex",
            backgroundColor: "#171717",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "26%",
            left: "0",
            width: "100%",
            height: "1px",
            display: "flex",
            backgroundColor: "#111111",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "92px",
            top: "92px",
            width: "10px",
            height: "10px",
            display: "flex",
            borderRadius: "50%",
            backgroundColor: "#4D8DFF",
            boxShadow:
              "0 0 24px rgba(77, 141, 255, 0.35)",
          }}
        />

        {/* Header */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            AR
            <span
              style={{
                color: "#4D8DFF",
              }}
            >
              .
            </span>
          </div>

          <div
            style={{
              display: "flex",
              color: "#71717A",
              fontSize: "16px",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Portfolio · 2026
          </div>
        </div>

        {/* Main copy */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#4D8DFF",
              fontSize: "17px",
              letterSpacing: "5px",
              textTransform: "uppercase",
              marginBottom: "25px",
            }}
          >
            Computer Engineer · AI/ML
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "70px",
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-3px",
            }}
          >
            <span>Engineering intelligence</span>

            <span>
              into useful systems
              <span
                style={{
                  color: "#4D8DFF",
                }}
              >
                .
              </span>
            </span>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#A1A1AA",
            fontSize: "17px",
          }}
        >
          <span>Abdur Rehman</span>

          <span>
            Python · TensorFlow · Flask · Next.js
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}