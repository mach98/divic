import { useState, useEffect } from 'react';
import { ListItemProps } from '@/components/ListItem/ListItem';

const tags: ListItemProps['tag'][] = [
  'RECEIVED',
  'ERROR',
  'DELIVERED',
  'CANCELLED',
  'ON HOLD',
];

const getRandomString = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomTag = (): ListItemProps['tag'] => {
  return tags[Math.floor(Math.random() * tags.length)];
};

const generateRandomData = (numItems: number): ListItemProps[] => {
  return Array.from({ length: numItems }, () => ({
    title: getRandomString(3),
    trackingNumber: getRandomNumber(10000000000, 99999999999),
    origin: getRandomString(6),
    destination: getRandomString(6),
    tag: getRandomTag(),
    isSelected: false,
    setIsSelected: () => {},
  }));
};

const useRandomData = (numItems: number): ListItemProps[] => {
  const [data, setData] = useState<ListItemProps[]>([]);

  useEffect(() => {
    setData(generateRandomData(numItems));
  }, [numItems]);

  return data;
};

export default useRandomData;
