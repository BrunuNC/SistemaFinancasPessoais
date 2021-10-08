import { Item } from '../types/Item';

export const items: Item[] = [
  { date: new Date(Date.now()), category: 'food', title: 'McDonalds', value: 30.12 },
  { date: new Date(Date.now()), category: 'food', title: 'Burger King', value: 28 },
  { date: new Date(Date.now()), category: 'rent', title: 'Aluguel Apt', value: 2300 },
  { date: new Date(Date.now()), category: 'salary', title: 'Salario Acme', value: 4300 }
];