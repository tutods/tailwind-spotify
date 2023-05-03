import "@app/globals.css";

export const metadata = {
  title: "Spotify",
  description: "Listen to music.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
