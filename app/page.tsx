export default function Page() {
  return (
    <div style={{
      padding: 20,
      fontFamily: "system-ui",
      background: "#0b0f1a",
      color: "white",
      minHeight: "100vh"
    }}>
      <h1>PeakFit AI</h1>

      <div style={{
        marginTop: 20,
        padding: 15,
        background: "#111827",
        borderRadius: 12
      }}>
        <p>Calories</p>
        <h2>1840 / 2450</h2>
      </div>

      <div style={{
        marginTop: 20,
        padding: 15,
        background: "#111827",
        borderRadius: 12
      }}>
        <p>Workout</p>
        <h2>Push Day — 2/7 completed</h2>
      </div>

      <div style={{
        marginTop: 20,
        padding: 15,
        background: "#111827",
        borderRadius: 12
      }}>
        <p>AI Insight</p>
        <h2>You are 38g short on protein</h2>
      </div>
    </div>
  );
}
