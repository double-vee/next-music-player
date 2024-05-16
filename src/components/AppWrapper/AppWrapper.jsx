export default function AppWrapper({ children, style }) {
  return (
    <div
      className="app-wrapper"
      style={style}
    >
      {children}
    </div>
  );
}
