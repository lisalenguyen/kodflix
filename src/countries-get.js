import australia from './images/australia.jpg';
import austria from './images/austria.jpg';
import france from './images/france.jpg';
import indonesia from './images/indonesia.jpg';
import romania from './images/romania.jpg';
import monaco from './images/monaco.jpg';

export default function getCountries() {
    return [
      { id: 'australia', name: 'Australia', src: australia },
      { id: 'austria', name: 'Austria', src: austria },
      { id: 'france', name: 'France', src: france },
      { id: 'indonesia', name: 'Indonesia', src: indonesia },
      { id: 'monaco', name: 'Monaco', src: monaco },
      { id: 'romania', name: 'Romania', src: romania },
    ];
  }