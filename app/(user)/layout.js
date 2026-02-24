import Nvigation from "../components/Navigation"
export default function RootLayout({ children }) {
  return (
    <html>
      <body><Nvigation/>{children}</body>
    </html>
  );
}
