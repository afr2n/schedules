import './App.css'
import Header from '@/components/Header';
import ScheduleList from '@/components/ScheduleList';
function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <ScheduleList />
      </div>
    </>
  )
}

export default App
