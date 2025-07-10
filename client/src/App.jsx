import React from "react";

// Import Google Fonts in your public/index.html for bold header font (Montserrat, for example).

const styles = {
  page: {
    minHeight: "100vh",
    background: "#bca681",
    padding: "0 0 40px 0",
    fontFamily: "'Montserrat', Arial, sans-serif",
    boxSizing: "border-box",
  },
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: 800,
    margin: "0 auto",
    padding: "24px 0 0 0",
  },
  navLeft: { display: "flex", gap: 8 },
  navBtn: {
    background: "#e9e4d0",
    border: "2px solid #222",
    borderRadius: 7,
    fontWeight: 700,
    padding: "3px 16px",
    fontSize: 14,
    cursor: "pointer",
  },
  navRight: {
    fontWeight: 700,
    fontSize: 13,
    background: "#e9e4d0",
    border: "2px solid #222",
    borderRadius: 7,
    padding: "3px 14px",
    cursor: "pointer",
  },
  main: {
    maxWidth: 800,
    margin: "0 auto",
    padding: "0 10px",
    textAlign: "center",
  },
  h1: {
    fontSize: 36,
    fontWeight: 900,
    margin: "42px 0 0 0",
    letterSpacing: 1,
  },
  h2: {
    fontSize: 24,
    fontWeight: 900,
    margin: "10px 0 30px 0",
    letterSpacing: 1,
  },
  subNote: {
    color: "#222",
    fontWeight: 600,
    fontSize: 13,
    marginTop: 6,
    marginBottom: 16,
    textDecoration: "underline dotted",
  },
  logoRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "32px 0 25px 0",
  },
  logoDiamond: {
    width: 30,
    height: 30,
    background: "#c44d00",
    transform: "rotate(45deg)",
    margin: "0 16px",
    display: "inline-block",
  },
  horizon: {
    fontSize: 90,
    fontWeight: 900,
    letterSpacing: -6,
    background:
      "linear-gradient(90deg, #18100f 70%, #c44d00 0 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: 0,
    lineHeight: 1,
  },
  offerVsRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px 0 0 0",
    gap: 30,
  },
  card: {
    background: "#c44d00ee",
    color: "#222",
    padding: "18px 26px 18px 26px",
    borderRadius: 18,
    width: 270,
    textAlign: "left",
    border: "3px dashed #8c4217",
    boxShadow: "0 2px 4px #0001",
  },
  cardTitle: {
    fontWeight: 900,
    fontSize: 19,
    letterSpacing: 1,
    color: "#fff",
    background: "#8c4217",
    padding: "0 6px",
    borderRadius: 4,
    display: "inline-block",
    marginBottom: 7,
  },
  offerList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    color: "#111",
    fontWeight: 700,
    fontSize: 15,
  },
  otherCard: {
    background: "#7d4c3caa",
    color: "#111",
    border: "3px dashed #7d4920",
  },
  otherTitle: {
    background: "#7d4920",
  },
  vs: {
    fontSize: 64,
    fontWeight: 900,
    margin: "0 16px",
    color: "#3a1c0b",
    textShadow: "1px 2px 0 #fff2",
  },
  sectionTitle: {
    fontWeight: 900,
    fontSize: 22,
    letterSpacing: 1,
    margin: "50px 0 10px 0",
    textDecoration: "underline dotted",
    display: "inline-block",
  },
};

export default function App() {
  return (
    <div style={styles.page}>
      <nav style={styles.navBar}>
        <div style={styles.navLeft}>
          <button style={styles.navBtn}>about</button>
          <button style={styles.navBtn}>contact</button>
          <button style={styles.navBtn}>pricing</button>
        </div>
        <button style={styles.navRight}>I want my website right now!</button>
      </nav>

      <main style={styles.main}>
        <h1 style={styles.h1}>
          cooler WEB.<br />
          bigger REACH.<br />
          better RESULTS.
        </h1>
        <div style={styles.subNote}>
          ...if you want these three choose...
        </div>

        <div style={styles.logoRow}>
          <span style={styles.logoDiamond}></span>
        </div>

        <div>
          <span style={styles.horizon}>horizont</span>
        </div>

        <div style={styles.offerVsRow}>
          <div style={styles.card}>
            <div style={styles.cardTitle}>WHAT WE OFFER</div>
            <ul style={styles.offerList}>
              <li>
                LIGHTNING-FAST WEBSITES – BUILT WITH MODERN TECH
              </li>
              <li>
                TAILOR-MADE DESIGNS – EVERY PIXEL CRAFTED TO FIT YOUR BRAND
              </li>
              <li>
                COMPLEX SYSTEMS? NO PROBLEM. WE BUILD CUSTOM SOLUTIONS – NOT JUST WEBSITES
              </li>
              <li>
                SECURE &amp; SCALABLE – NO PLUGINS, NO HEADACHES
              </li>
            </ul>
          </div>
          <div style={styles.vs}>vs</div>
          <div style={{ ...styles.card, ...styles.otherCard }}>
            <div style={{ ...styles.cardTitle, ...styles.otherTitle }}>
              WHAT OTHERS
            </div>
            <ul style={styles.offerList}>
              <li>
                SLOW-LOADING WORDPRESS SITES FULL OF UNNECESSARY PLUGINS
              </li>
              <li>
                GENERIC TEMPLATES USED FOR DOZENS OF OTHER BUSINESSES
              </li>
              <li>
                LIMITED CUSTOMIZATION AND PERFORMANCE ISSUES
              </li>
            </ul>
          </div>
        </div>

        <div style={styles.sectionTitle}>WHAT WE WORK WITH?</div>
        {/* You can add your stack/tech section here */}
      </main>
    </div>
  );
}