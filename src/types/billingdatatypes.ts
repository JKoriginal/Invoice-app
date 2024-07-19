
export interface Service {
    id: number;
    description: string;
    dueDate: Date;
    amount: number;
    currency: string;
  }
  
export interface Client {
    id: number;
    name: string;
    services: Service[];
  }
  