import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card title="Card 1" image="https://plus.unsplash.com/premium_photo-1712615187762-6b025d3ac902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
      <Card title="Card 2" image="https://plus.unsplash.com/premium_photo-1760708741997-8c8c1e793330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvY3VzJTIwb2JqZWN0fGVufDB8fDB8fHww"/>
      <Card title="Card 3" image="https://plus.unsplash.com/premium_photo-1666901328734-3c6eb9b6b979?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww"/>
    </div>
  )
}

export default App