const UserProfile = (props) => {
  return (
    <div
    style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <p>
        Age:{" "}
        <span style={{ fontWeight: "bold", color: "blue" }}>
          {props.age}
        </span>
      </p>

      <p style={{ fontStyle: "italic" }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
