import CatalogCard from '../../components/CatalogCard';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import './styles.css';

export default function Catalog() {

    return (
        <>
            <Header />
            <main>
                <section id='catalog-section' className="car-container">
                    <SearchBar />
                    <div className="car-catalog-cards">
                        <CatalogCard />
                    </div>
                </section>
            </main>
        </>
    );
}