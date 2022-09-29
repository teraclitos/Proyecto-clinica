const defaultServices = [
  'Pediatría',
  'Cardiología',
  'Ginecología',
  'Cirugía',
  'Fonoaudiología',
  'Flebología',
  'Traumatología',
  'Clinica médica',
  'Otorrinonaringología',
  'Urología',
];

const fetchServices = () => {
  return fetchItems('services');
}

window.addEventListener('load', function(evt) {
  const services = fetchItems('services');
  if (services.length === 0) {
    for(let i = 0; i < defaultServices.length; i++) {
      createItem('services', { "name": defaultServices[i] });
    }
  }
});
