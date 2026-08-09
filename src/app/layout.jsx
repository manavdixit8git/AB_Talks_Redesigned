import "./globals.css";

export const metadata = {
  title: {
    default: "ABTalks — The 60-Day Build Challenge",
    template: "%s · ABTalks",
  },
  description: "Build practical development skills through 60 focused days of lessons, projects, progress tracking, and mentor support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
