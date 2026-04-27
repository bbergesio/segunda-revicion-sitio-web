import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { RiSearchLine } from 'react-icons/ri';
import styles from './MapaPuntos.module.css';

import logoBlanco from '../../assets/Logotipo_pickit/Logotipo_mobile_blanco.svg';

// Custom Map Marker using Pickit's logo
const createCustomIcon = () => {
  return L.divIcon({
    className: styles.customMarker,
    html: `
      <div class="${styles.markerPin}">
        <img src="${logoBlanco}" alt="Pickit" class="${styles.markerLogo}" />
      </div>
      <div class="${styles.markerShadow}"></div>
    `,
    iconSize: [40, 50],
    iconAnchor: [20, 50],
    popupAnchor: [0, -50]
  });
};

const customIcon = createCustomIcon();

// Simulated point data for LatAm
const puntos = [
  { id: 1, name: "Kiosco El Sol", address: "Av. Corrientes 1234, Buenos Aires, AR", hours: "08:00 - 20:00", lat: -34.6037, lng: -58.3816 },
  { id: 2, name: "Librería Ateneo", address: "Providencia 456, Santiago, CL", hours: "09:00 - 19:00", lat: -33.4489, lng: -70.6693 },
  { id: 3, name: "Farmacia Centro", address: "18 de Julio 890, Montevideo, UY", hours: "24 hs", lat: -34.9011, lng: -56.1645 },
  { id: 4, name: "Supermercado Express", address: "Carrera 7 # 72-01, Bogotá, CO", hours: "07:00 - 22:00", lat: 4.7110, lng: -74.0721 },
  { id: 5, name: "Tienda de Conveniencia", address: "Av. Insurgentes Sur 123, CDMX, MX", hours: "08:00 - 23:00", lat: 19.4326, lng: -99.1332 },
  { id: 6, name: "Papelería del Barrio", address: "Av. Cabildo 2345, Buenos Aires, AR", hours: "08:30 - 19:30", lat: -34.5612, lng: -58.4554 },
];

const MapController = ({ center }) => {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
};

const MapaPuntos = ({ description }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mapCenter, setMapCenter] = useState([-15.0, -65.0]); // Centered roughly in South America
  const [mapZoom, setMapZoom] = useState(3);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    // Simulate finding a point
    const found = puntos.find(p => p.address.toLowerCase().includes(searchQuery.toLowerCase()) || p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (found) {
      setMapCenter([found.lat, found.lng]);
      setMapZoom(14);
    } else {
      alert("No se encontraron puntos cercanos a tu búsqueda.");
    }
  };

  return (
    <section className={styles.mapSection} id="mapa">
      <div className="container">
        <div className={styles.header}>
          <h2 className="headline-l">Conocé nuestra red de puntos</h2>
          {description && <p className="body-l" style={{ marginTop: '8px', color: 'var(--color-grey-4f)' }}>{description}</p>}
        </div>

        <div className={styles.searchContainer}>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <input 
              type="text" 
              placeholder="Ingresá tu calle, barrio o código postal" 
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className={styles.searchButton}>
              <RiSearchLine size={24} />
            </button>
          </form>
        </div>
      </div>

      <div className={styles.mapWrapper}>
        <MapContainer 
          center={mapCenter} 
          zoom={mapZoom} 
          scrollWheelZoom={false} 
          className={styles.map}
        >
          <MapController center={mapCenter} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {puntos.map(punto => (
            <Marker key={punto.id} position={[punto.lat, punto.lng]} icon={customIcon}>
              <Popup className={styles.customPopup}>
                <div>
                  <h4 className="overline-l">{punto.name}</h4>
                  <p className="body-m"><strong>📍</strong> {punto.address}</p>
                  <p className="body-s"><strong>⏰</strong> Horario: {punto.hours}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default MapaPuntos;
