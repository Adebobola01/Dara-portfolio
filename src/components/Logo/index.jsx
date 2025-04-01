const Logo = () => {
  const styles = {
    textDecoration: "none",
    color: "#0773FF",
    fontSize: "2.4rem",
    fontWeight: "500",
    // height: "3.6rem",
    display: "flex",
    alignItems: "center",
  };

  return (
    <a style={styles} href="/">
      <span
        style={{ color: "#49494A", fontSize: "inherit", marginRight: ".8rem" }}
      >
        Oluwadara{" "}
      </span>
      Olasunkanmi
    </a>
  );
};

export default Logo;
