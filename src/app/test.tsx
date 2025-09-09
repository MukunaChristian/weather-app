export default function Test() {
    return (
        <div className="p-4">
            <div className="bg-red-500 text-white p-4 rounded mb-4">
                <h2 className="text-xl font-bold">TAILWIND TEST</h2>
                <p>This should be red if Tailwind is working!</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Test Button
            </button>
        </div>
    );
}