import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import View_Service from './components/View_Service';
import Contact from './components/Contact';
import Login from './components/Login';
import Cart from './components/Cart';
import Account from './components/Account'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  // const photos = [
  //   {
  //     id: 1,
  //     url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
  //     title: 'Mountain Lake',
  //     location: 'Swiss Alps',
  //     date: 'April 2024',
  //     photographer: 'John Doe'
  //   },
  //   {
  //     id: 2,
  //     url: 'https://images.unsplash.com/photo-1682687221038-404670f01d03',
  //     title: 'Desert Sunset',
  //     location: 'Sahara Desert',
  //     date: 'March 2024',
  //     photographer: 'Jane Smith'
  //   },
  //   {
  //     id: 3,
  //     url: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538',
  //     title: 'Ocean Waves',
  //     location: 'Pacific Coast',
  //     date: 'February 2024',
  //     photographer: 'Mike Johnson'
  //   },
  //   {
  //     id: 4,
  //     url: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b',
  //     title: 'Forest Path',
  //     location: 'Black Forest',
  //     date: 'January 2024',
  //     photographer: 'Sarah Wilson'
  //   },
  //   {
  //     id: 5,
  //     url: 'https://images.unsplash.com/photo-1682687220923-c58b9a4592ae',
  //     title: 'City Lights',
  //     location: 'Tokyo',
  //     date: 'December 2023',
  //     photographer: 'David Lee'
  //   },
  //   {
  //     id: 6,
  //     url: 'https://images.unsplash.com/photo-1682687221080-5cb261c645cb',
  //     title: 'Northern Lights',
  //     location: 'Iceland',
  //     date: 'November 2023',
  //     photographer: 'Emma Brown'
  //   }
  // ];

  return (
   <>
    <Router>
    <NavBar/>
      <Routes>
      <Route path='/Homepage' element={<Header />}></Route>
        <Route path='/View_Service' element={<View_Service/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Account' element={<Account/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    <Footer/>

    </Router>

   </>
  );
}

export default App;