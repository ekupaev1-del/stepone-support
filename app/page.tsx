export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f4f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        fontFamily: "-apple-system, BlinkMacSystemFont, system-ui"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "48px",
          borderRadius: "18px",
          maxWidth: "720px",
          width: "100%",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
        }}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
          StepOne Support
        </h1>

        <p style={{ color: "#555", marginBottom: "30px" }}>
          Support page for the StepOne nutrition app.
        </p>

        <h3>Contact</h3>
        <p>Email: sstepone1@yandex.com</p>

        <h3 style={{ marginTop: "30px" }}>About the app</h3>
        <p>
          StepOne is a nutrition and healthy lifestyle app that helps users
          track meals, analyze nutrition and receive educational
          recommendations.
        </p>

        <h3 style={{ marginTop: "30px" }}>Medical Disclaimer</h3>
        <p>
          StepOne does not provide medical advice, diagnosis or treatment.
          All information in the app is for educational purposes only and
          should not replace consultation with a qualified healthcare
          professional.
        </p>

        <h3 style={{ marginTop: "30px" }}>Privacy Policy</h3>
        <p>
          StepOne respects your privacy. The application may store nutrition
          and lifestyle data entered by the user in order to provide analysis
          and recommendations. We do not sell personal data to third parties.
        </p>

        <h3 style={{ marginTop: "30px" }}>Terms of Use</h3>
        <p>
          By using StepOne you agree that the information provided in the
          application is educational and informational only. The developers
          are not responsible for decisions made based on the information
          provided by the app.
        </p>

        <hr style={{ margin: "40px 0", border: "none", borderTop: "1px solid #eee" }} />

        <p style={{ fontSize: "14px", color: "#777" }}>
          StepOne © 2026
        </p>
      </div>
    </main>
  )
}
