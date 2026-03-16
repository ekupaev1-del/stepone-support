export default function Page() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f4f4f5",
      fontFamily: "system-ui"
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "14px",
        maxWidth: "600px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
      }}>
        <h1>StepOne Support</h1>

        <p>Support page for the StepOne nutrition app.</p>

        <h3>Contact</h3>
        <p>Email: sstepone1@yandex.com</p>

        <h3>About the app</h3>
        <p>
          StepOne is a nutrition and healthy lifestyle app that helps users
          track meals, analyze nutrition and receive educational recommendations.
        </p>

        <h3>Medical Disclaimer</h3>
        <p>
          StepOne does not provide medical advice, diagnosis or treatment.
          All information in the app is for educational purposes only.
        </p>
      </div>
    </main>
  )
}
