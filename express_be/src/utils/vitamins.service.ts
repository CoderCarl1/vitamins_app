/**
 * Data Model Interfaces
 */
import {Vitamin, Vitamins} from './vitamins.interface'


/**
 * In-Memory Store
 */  

const vitamins: Vitamins = {
  1: {
    id: 1,
    name: "Burger",
    description: "Tasty",
    image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
    vitamins: ['vitamin a', 'vitamin b', 'vitamin c']
  },
  2: {
    id: 2,
    name: "Pizza",
    description: "Cheesy",
    image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
    vitamins: ['vitamin a', 'vitamin b', 'vitamin c']
  },
  3: {
    id: 3,
    name: "Tea",
    description: "Informative",
    image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
    vitamins: ['vitamin a', 'vitamin b', 'vitamin c']
  }
}

/**
 * Service Methods
 */
export const findAll = async (): Promise<Vitamins> => {
  return vitamins;
};

export const find = async (id: number): Promise<Vitamin> => {
  const record: Vitamin = vitamins[id];

  if (record) {
    return record;
  }

  throw new Error("No record found");
};

export const create = async (newVitamin: Vitamin): Promise<void> => {
  const id = Object.keys(vitamins).length + 1
  vitamins[id] = {
    ...newVitamin,
    id
  };
};

export const update = async (updatedVitamin: Vitamin): Promise<void> => {
  if (vitamins[updatedVitamin.id]) {
    vitamins[updatedVitamin.id] = updatedVitamin;
    return;
  }

  throw new Error("No record found to update");
};

export const remove = async (id: number): Promise<void> => {
  const record: Vitamin = vitamins[id];

  if (record) {
    delete vitamins[id];
    return;
  }

  throw new Error("No record found to delete");
};