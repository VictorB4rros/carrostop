import './styles.css';
import carImg from '../../assets/car.png';
import CardButton from '../CardButton';

export default function CatalogCard() {
    return (
        <div className="car-card">
            <div>
                <img src={carImg} alt="Car" />
            </div>
            <div>
                <h4>Audi Supra TT</h4>
                <h3>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipisicing elit. Cupiditate, nisi
                </h3>
            </div>
            <CardButton />
        </div>
    );
}