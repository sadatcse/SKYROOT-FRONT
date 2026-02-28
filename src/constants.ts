export interface Project {
  id: string;
  title: string;
  location: string;
  type: 'Residential' | 'Commercial' | 'Mixed Use';
  status: 'Ongoing' | 'Upcoming' | 'Completed';
  image: string;
  description: string;
  price?: string;
  unitsLeft?: number;
}

export const featuredProjects: Project[] = [
  {
    id: 'fp1',
    title: 'EDISON PORTIA',
    location: 'Bashundhara R/A',
    type: 'Residential',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    description: 'A masterpiece of modern architecture offering luxurious living spaces.',
    price: 'Call for Price'
  },
  {
    id: 'fp2',
    title: 'EDISON VERONA',
    location: 'Uttara',
    type: 'Residential',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    description: 'Edison Verona stands as a beacon of refined living, where the romance of design and the innovation.',
    price: 'Call for Price'
  },
  {
    id: 'fp3',
    title: 'EDISON DESDEMONA',
    location: 'Bashundhara R/A',
    type: 'Residential',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1600596542815-60c37c6525fa?auto=format&fit=crop&w=800&q=80',
    description: 'Experience the pinnacle of urban living with unparalleled amenities.',
    price: 'Call for Price'
  },
  {
    id: 'fp4',
    title: 'EDISON ROSALIND',
    location: 'Gulshan',
    type: 'Residential',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    description: 'Elegant living spaces designed for the modern family.',
    price: 'Coming Soon'
  }
];

export const projects: Project[] = [
  // Ongoing Projects
  {
    id: '1',
    title: 'Skyroot Horizon',
    location: 'Gulshan 2, Dhaka',
    type: 'Residential',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-luxury apartments overlooking the Gulshan Lake with smart home integration.',
    price: '12.5 Cr',
    unitsLeft: 4
  },
  {
    id: '2',
    title: 'The Apex Plaza',
    location: 'Banani 11, Dhaka',
    type: 'Commercial',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    description: 'Premium corporate headquarters with LEED Gold certification and rooftop gardens.',
    price: '45.0 Cr'
  },
  {
    id: '3',
    title: 'Mirage Gardens',
    location: 'Baridhara Diplomatic Zone, Dhaka',
    type: 'Residential',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    description: 'Exclusive residences for the elite, featuring private pools and high-security access.',
    price: '22.0 Cr',
    unitsLeft: 2
  },
  {
    id: '4',
    title: 'Bashundhara Heights',
    location: 'Bashundhara R/A, Dhaka',
    type: 'Residential',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80',
    description: 'Modern family living with community parks, schools, and shopping malls nearby.',
    price: '3.5 Cr',
    unitsLeft: 15
  },
  {
    id: '5',
    title: 'Dhanmondi Signature',
    location: 'Dhanmondi 27, Dhaka',
    type: 'Mixed Use',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80',
    description: 'A vibrant mix of luxury apartments and boutique retail spaces in the cultural heart of Dhaka.',
    price: '5.8 Cr'
  },
  {
    id: '6',
    title: 'Uttara North Star',
    location: 'Uttara Sector 4, Dhaka',
    type: 'Residential',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80',
    description: 'Contemporary apartments with excellent connectivity to the airport and metro rail.',
    price: '2.8 Cr',
    unitsLeft: 8
  },
  {
    id: '7',
    title: 'Chittagong Bay View',
    location: 'Khulshi, Chittagong',
    type: 'Residential',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80',
    description: 'Hillside luxury apartments offering breathtaking views of the Bay of Bengal.',
    price: '4.2 Cr'
  },
  {
    id: '8',
    title: 'Sylhet Tea Estate Manor',
    location: 'Subid Bazar, Sylhet',
    type: 'Residential',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
    description: 'Serene living spaces inspired by the lush tea gardens of Sylhet.',
    price: '1.9 Cr'
  },
  {
    id: '9',
    title: 'Purbachal Green City',
    location: 'Purbachal, Dhaka',
    type: 'Mixed Use',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=800&q=80',
    description: 'The future of urban living with eco-friendly infrastructure and smart city features.',
    price: '3.2 Cr'
  },
  {
    id: '10',
    title: 'Motijheel Trade Center',
    location: 'Motijheel, Dhaka',
    type: 'Commercial',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80',
    description: 'State-of-the-art office spaces in the financial hub of Bangladesh.',
    price: '18.5 Cr'
  },

  // Upcoming Projects
  {
    id: '11',
    title: 'Gulshan Avenue Tower',
    location: 'Gulshan 1, Dhaka',
    type: 'Commercial',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=800&q=80',
    description: 'An iconic skyscraper set to redefine the Dhaka skyline with premium office suites.',
    price: 'Registration Open'
  },
  {
    id: '12',
    title: 'Banani Lakefront',
    location: 'Banani, Dhaka',
    type: 'Residential',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
    description: 'Waterfront living with private decks and exclusive boat access.',
    price: 'Coming Soon'
  },
  {
    id: '13',
    title: 'Cox\'s Bazar Ocean Pearl',
    location: 'Marine Drive, Cox\'s Bazar',
    type: 'Mixed Use',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    description: 'Luxury resort residences and retail promenade facing the world\'s longest beach.',
    price: 'Invest Now'
  },
  {
    id: '14',
    title: 'Mirpur Metro Hub',
    location: 'Mirpur 10, Dhaka',
    type: 'Commercial',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    description: 'Transit-oriented development integrating retail, office, and entertainment.',
    price: 'Pre-launch'
  },
  {
    id: '15',
    title: 'Tejgaon Industrial Lofts',
    location: 'Tejgaon, Dhaka',
    type: 'Commercial',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1524230659092-07f99a75c013?auto=format&fit=crop&w=800&q=80',
    description: 'Creative workspaces converted from industrial warehouses for startups and agencies.',
    price: 'Inquire'
  },
  {
    id: '16',
    title: 'Lalmatia Quietude',
    location: 'Lalmatia, Dhaka',
    type: 'Residential',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1600596542815-60c37c6525fa?auto=format&fit=crop&w=800&q=80',
    description: 'Peaceful residential apartments in the historic and calm neighborhood of Lalmatia.',
    price: 'Booking Open'
  },
  {
    id: '17',
    title: 'Khulna Riverside',
    location: 'Sonadanga, Khulna',
    type: 'Residential',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    description: 'River-view apartments bringing modern amenities to the gateway of the Sundarbans.',
    price: 'Coming Soon'
  },
  {
    id: '18',
    title: 'Rajshahi Silk City',
    location: 'Kazla, Rajshahi',
    type: 'Mixed Use',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'A cultural and commercial hub celebrating the heritage of Rajshahi.',
    price: 'Pre-booking'
  },
  {
    id: '19',
    title: 'Barisal Riverfront',
    location: 'Kirtankhoula, Barisal',
    type: 'Residential',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80',
    description: 'Scenic living by the river with modern facilities and green spaces.',
    price: 'Coming Soon'
  },
  {
    id: '20',
    title: 'Comilla Green Valley',
    location: 'Kandirpar, Comilla',
    type: 'Residential',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=800&q=80',
    description: 'Eco-friendly apartments in the heart of Comilla city.',
    price: 'Registration Open'
  },

  // Completed Projects
  {
    id: '21',
    title: 'The Grand Gulshan',
    location: 'Gulshan 2, Dhaka',
    type: 'Residential',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    description: 'Award-winning luxury condominium completed in 2023.',
    price: 'Sold Out'
  },
  {
    id: '22',
    title: 'Banani Corporate Heights',
    location: 'Banani, Dhaka',
    type: 'Commercial',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    description: 'A landmark corporate address hosting multinational corporations.',
    price: 'Lease Only'
  },
  {
    id: '23',
    title: 'Dhanmondi Lakeview',
    location: 'Dhanmondi 8/A, Dhaka',
    type: 'Residential',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80',
    description: 'Classic apartments with direct views of the Dhanmondi Lake.',
    price: 'Sold Out'
  },
  {
    id: '24',
    title: 'Uttara Sector 7 Villa',
    location: 'Uttara Sector 7, Dhaka',
    type: 'Residential',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    description: 'A private gated community of duplex villas.',
    price: 'Sold Out'
  },
  {
    id: '25',
    title: 'Bashundhara City Complex',
    location: 'Panthapath, Dhaka',
    type: 'Mixed Use',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=800&q=80',
    description: 'One of the largest shopping malls and office complexes in South Asia.',
    price: 'Lease Only'
  },
  {
    id: '26',
    title: 'Chittagong Port View',
    location: 'Agrabad, Chittagong',
    type: 'Commercial',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    description: 'Prime office space near the Chittagong Port Authority.',
    price: 'Lease Only'
  },
  {
    id: '27',
    title: 'Sylhet Garden City',
    location: 'Zindabazar, Sylhet',
    type: 'Mixed Use',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'A modern shopping and residential complex in the heart of Sylhet.',
    price: 'Sold Out'
  },
  {
    id: '28',
    title: 'Narayanganj River Terminal',
    location: 'Narayanganj',
    type: 'Commercial',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?auto=format&fit=crop&w=800&q=80',
    description: 'Logistics and office hub serving the river port.',
    price: 'Lease Only'
  },
  {
    id: '29',
    title: 'Gazipur Industrial Park',
    location: 'Gazipur',
    type: 'Commercial',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    description: 'Modern industrial plots with full utility connections.',
    price: 'Sold Out'
  },
  {
    id: '30',
    title: 'Savar Green Enclave',
    location: 'Savar, Dhaka',
    type: 'Residential',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1600596542815-60c37c6525fa?auto=format&fit=crop&w=800&q=80',
    description: 'Affordable luxury apartments near the National Memorial.',
    price: 'Sold Out'
  }
];
