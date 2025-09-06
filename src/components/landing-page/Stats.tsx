export default function Stats() {
  return (
    <section className="py-20 flex justify-around text-center">
      <div>
        <div className="mb-1 text-4xl font-bold text-red-700">10K+</div>
        <p className="font-medium text-gray-600">Active Users</p>
      </div>
      <div>
        <div className="mb-1 text-4xl font-bold text-pink-500">1M+</div>
        <p className="font-medium text-gray-600">Habits Tracked</p>
      </div>
      <div>
        <div className="mb-1 text-4xl font-bold text-green-500">85%</div>
        <p className="font-medium text-gray-600">Success Rate</p>
      </div>
      <div>
        <div className="mb-1 text-4xl font-bold text-yellow-400">30+</div>
        <p className="font-medium text-gray-600">Days Average Streak</p>
      </div>
    </section>
  );
}
