'use client';
import { useState } from 'react';
import WeatherCard from './components/WeatherCard';


type WeatherResponse = {
  name: string;
  main: { temp: number };
  weather: { main: string; description: string; icon: string }[];
};


export default function Page() {
  const [city, setCity] = useState('');
  const [data, setData] = useState<WeatherResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);


  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setData(null);
    if (!city.trim()) { setError('Please enter a city.'); return; }


    setLoading(true);
    try {
      const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
      const body = await res.json();
      if (!res.ok) setError(body.error || 'Error fetching weather.');
      else setData(body);
    } catch {
      setError('Network error.');
    } finally {
      setLoading(false);
    }
  }


  return (
    <main>
      <form onSubmit={onSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search city…"
          className="flex-1 px-3 py-2 rounded-lg border border-gray-700 bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Loading…' : 'Get Weather'}
        </button>
      </form>


      {error && (
        <div className="bg-red-900/30 border border-red-600 text-red-300 p-3 rounded-lg mb-4">
          {error}
        </div>
      )}


      {loading && (
        <div className="flex justify-center p-6">
          <div className="w-6 h-6 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}


      {data && !error && !loading && <WeatherCard data={data} />}
    </main>
  );
}