'use client';


type WeatherResponse = {
    name: string;
    main: { temp: number };
    weather: { main: string; description: string; icon: string }[];
};


export default function WeatherCard({ data }: { data: WeatherResponse }) {
    const w = data.weather[0];
    return (
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex items-center justify-between shadow-lg">
            <div>
                <h2 className="text-xl font-semibold">{data.name}</h2>
                <p className="text-4xl font-bold mt-1">{Math.round(data.main.temp)}°C</p>
                <p className="capitalize text-gray-400 mt-1">{w.main} – {w.description}</p>
            </div>
            {w.icon && (
                <img
                    src={`https://openweathermap.org/img/wn/${w.icon}@2x.png`}
                    alt={w.description}
                    className="w-20 h-20"
                />
            )}
        </div>
    );
}