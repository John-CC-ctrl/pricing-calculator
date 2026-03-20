import { useState } from 'react'
import { CalculatorProvider } from './context/CalculatorContext'
import Header from './components/Header'
import Tabs from './components/Tabs'
import ResidentialTab from './components/residential/ResidentialTab'
import CommercialTab from './components/commercial/CommercialTab'

export default function App() {
  const [activeTab, setActiveTab] = useState('residential')

  return (
    <CalculatorProvider>
      <div className="min-h-screen bg-gray-cc-50">
        <Header />
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="max-w-5xl mx-auto px-4 py-6">
          {activeTab === 'residential' ? <ResidentialTab /> : <CommercialTab />}
        </main>
      </div>
    </CalculatorProvider>
  )
}
