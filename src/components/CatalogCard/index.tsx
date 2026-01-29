import './styles.css';
import carImg from '../../assets/car.png';
import CardButton from '../CardButton';

export default function CatalogCard() {
    return (
        <div className="car-card">
            <div className="car-card-image">
                <img src={carImg} alt="Car" />
            </div>
            <div className="car-card-text">
                <h2>Audi Supra TT</h2>
                <h4>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipisicing elit. Cupiditate, nisi
                </h4>
            </div>
            <CardButton />
        </div>
    );
}