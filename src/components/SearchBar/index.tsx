import './styles.css';

export default function SearchBar() {
    
    return (
        <form className="car-search-bar car-container car-mb40">
            <input type="text" placeholder="Digite sua busca" />
            <button type="submit">Buscar</button>
        </form>
    );
}