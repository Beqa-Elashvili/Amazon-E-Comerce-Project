export function Button() {
  const mode = "dark";

  return (
    <div className={mode === "dark" ? "bg-primary" : "bg-white"}>Button</div>
  );
}
