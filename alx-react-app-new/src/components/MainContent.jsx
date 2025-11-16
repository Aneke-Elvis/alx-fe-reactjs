import UserProfile from "./UserProfile";

function MainContent() {
  return (
    <main
     style={{
        backgroundColor: "#eef2ff",
        padding: "20px",
        minHeight: "300px",
      }}
    >
      <p>I love to visit New York, Paris, and Tokyo.</p>
      <h2 style={{ textAlign: "center", color: "purple" }}>
        Featured User
      </h2>

      <UserProfile
        name="John Doe"
        age={29}
        bio="A traveler who loves exploring new cities."
      />
    </main>
  );
}

export default MainContent;
