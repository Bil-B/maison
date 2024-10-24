import Banner from './Banner'
import Header from './Header'
import logo from '../assets/logo.png'
// import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Banner.css';

function App() {
	return (
		<div>
      <Header />
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>

			{/* <Cart /> */}
			<ShoppingList />
			
			<Footer />
		</div>
	)
}

export default App
