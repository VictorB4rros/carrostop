import './styles.css';
import carImg from '../../assets/car.png';
import CardButton from '../CardButton';

export default function CatalogCard() {
    return (
        <div className="car-card">
            <div className="car-card-image car-mt10">
                <img src={carImg} alt="Car" />
            </div>
            <div className="car-card-text">
                <h2 className="car-mb15">Audi Supra TT</h2>
                <h4 className="car-mb20 car-mt15">
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Cupiditate, nisi
                </h4>
            </div>
            <div className="car-mt20">
                <CardButton />
            </div>
        </div>
    );
}