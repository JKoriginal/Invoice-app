import { Client } from './billingdatatypes';

export const clients: Client[] = [
  // Existing clients with more services
  {
    id: 1,
    name: 'Manjula Kulathunga',
    services: [
      { id: 1, description: 'hosting buy from blix hosting', dueDate: new Date('2023-08-01'), amount: 25000, currency: 'USD' },
      { id: 2, description: 'Domain buy from blix hosting', dueDate: new Date('2023-09-01'), amount: 30000, currency: 'USD' },
      { id: 9, description: 'SSL certificate renewal', dueDate: new Date('2024-10-01'), amount: 1000, currency: 'USD' }, // New service
      { id: 14, description: 'Website security audit', dueDate: new Date('2024-11-01'), amount: 2000, currency: 'USD' }, // New service
    ],
  },
  {
    id: 2,
    name: 'Supun Kulathunga',
    services: [
      { id: 3, description: 'Domain buy from blix hosting', dueDate: new Date('2023-07-01'), amount: 15000, currency: 'USD' },
      { id: 10, description: 'Website maintenance (monthly)', dueDate: new Date('2024-08-01'), amount: 500, currency: 'USD' }, // New service
      { id: 15, description: 'Performance optimization', dueDate: new Date('2024-09-01'), amount: 1000, currency: 'USD' }, // New service
    ],
  },

  // New clients with sample services (some with additional services)
  {
    id: 3,
    name: 'Nimal Fernando',
    services: [
      { id: 4, description: 'Website development', dueDate: new Date('2024-08-15'), amount: 5000, currency: 'USD' },
      { id: 5, description: 'SEO consultation', dueDate: new Date('2024-09-01'), amount: 1000, currency: 'USD' },
      { id: 11, description: 'Domain name registration', dueDate: new Date('2024-10-01'), amount: 20, currency: 'USD' }, // New service
      { id: 16, description: 'Website hosting setup', dueDate: new Date('2024-07-15'), amount: 1000, currency: 'USD' }, // New service
    ],
  },
  {
    id: 4,
    name: 'Ramya Perera',
    services: [
      { id: 6, description: 'Email marketing campaign', dueDate: new Date('2024-07-25'), amount: 2000, currency: 'USD' },
      { id: 12, description: 'Landing page design', dueDate: new Date('2024-08-10'), amount: 1500, currency: 'USD' }, // New service
      { id: 17, description: 'A/B testing for landing page', dueDate: new Date('2024-08-20'), amount: 750, currency: 'USD' }, // New service
    ],
  },
  {
    id: 5,
    name: 'Dhanuka Silva',
    services: [
      { id: 7, description: 'Social media management', dueDate: new Date('2024-08-10'), amount: 3000, currency: 'USD' },
      { id: 8, description: 'Content creation', dueDate: new Date('2024-09-05'), amount: 1500, currency: 'USD' },
      {
          id: 13, description: 'Email marketing automation setup', dueDate: new Date('2024-09-15'),
          amount: 1000,
          currency: 'LKR'
      }],
    },
  ];
