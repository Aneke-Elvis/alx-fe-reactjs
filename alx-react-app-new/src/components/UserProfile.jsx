const UserProfile = (props) => {
  return (
    <div
    style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "15px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <p>
        Age:{" "}
        <span style={{ fontWeight: "bold", color: "darkred" }}>
          {props.age}
        </span>
      </p>

      <p style={{ fontStyle: "italic" }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
