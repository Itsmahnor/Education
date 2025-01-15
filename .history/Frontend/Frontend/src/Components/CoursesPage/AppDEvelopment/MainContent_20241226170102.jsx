<div className="bg-brown-900 text-orange-200 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Outline</h1>
      <div className="max-w-5xl mx-auto">
        {outline.map((month, index) => (
          <div key={index} className="mb-8">
            <button className="w-full bg-orange-500 text-brown-900 font-semibold text-left px-6 py-3 rounded-t-lg shadow-md">
              {month.month}: {month.title}
            </button>
            <div className="bg-brown-800 p-6 rounded-b-lg">
              {month.topics.map((topic, topicIndex) => (
                <div
                  key={topicIndex}
                  className="mb-4 border-b border-orange-400 pb-4 last:border-none last:pb-0"
                >
                  <h2 className="text-lg font-semibold">{topic.heading}</h2>
                  <p className="text-sm">{topic.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-orange-700 text-center p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold">When would you like to start?</h3>
        <p className="text-sm mt-2">
          Start straight away and join a community of learners from across
          Pakistan. If the course hasn’t started yet, you’ll see the future
          date listed below.
        </p>
      </div>
    </div>