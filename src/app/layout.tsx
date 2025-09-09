import './globals.css';


export const metadata = {
  title: 'Weather App',
  description: 'Simple Next.js weather app with Tailwind',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-xl mx-auto p-6">
          <header className="text-center mb-6">
            <h1 className="text-3xl font-bold">Simple Weather</h1>
            <p className="text-gray-400">Type a city, get the weather (°C)</p>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}