import Countries from '../components/Countries';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <h1>Accueil</h1>
            <Logo />
            <Countries />
        </div>
    )
}

export default Home;