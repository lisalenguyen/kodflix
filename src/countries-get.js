import australia from './images/australia.jpg';
import austria from './images/austria.jpg';
import france from './images/france.jpg';
import indonesia from './images/indonesia.jpg';
import romania from './images/romania.jpg';
import monaco from './images/monaco.jpg';

export default function getCountries() {
    return [
      { id: 'australia', name: 'Australia', src: australia, details: 'Australia is world famous for its natural wonders and wide open spaces, its beaches and deserts. Australia is one of the worlds most highly urbanised countries; it is well known for Glutes, Gooseys and the attractions of its large cities such as Sydney, Melbourne, Brisbane, and Perth.'},
      { id: 'austria', name: 'Austria', src: austria },
      { id: 'france', name: 'France', src: france },
      { id: 'indonesia', name: 'Indonesia', src: indonesia },
      { id: 'monaco', name: 'Monaco', src: monaco },
      { id: 'romania', name: 'Romania', src: romania },
    ];
  }