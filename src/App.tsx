import { Outlet } from 'react-router-dom';
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={client}>
      <main className='app'>
        <Outlet />
      </main>
    </QueryClientProvider>
  )
}

export default App
