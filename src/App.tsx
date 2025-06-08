import { useState } from 'react'
import { format } from 'date-fns'

// This is the main calendar component
function App() {
  const [currentDate, setCurrentDate] = useState(new Date())

  return (
    <div className="min-h-screen p-4">
      <header className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
        <p className="text-gray-600">{format(currentDate, 'MMMM yyyy')}</p>
      </header>
      
      <main className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-7 gap-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center font-semibold text-gray-600">
                {day}
              </div>
            ))}
          </div>
          {/* Calendar grid will be implemented here */}
        </div>
      </main>
    </div>
  )
}

export default App 