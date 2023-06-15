import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className='m-20'>
      <h1 className='text-center text-4xl font-semibold mb-10'>Coffee Shop</h1>
      <div className='grid grid-cols-2 gap-10'>
        {
          coffees.map(coffee => <CoffeeCard coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
            key={coffee._id}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
