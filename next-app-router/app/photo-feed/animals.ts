import cat from './photos/cat.jpg'
import dog from './photos/dog.jpg'
import wolf from './photos/wolf.jpg'
import rabbit from './photos/rabbit.jpg'
import hamster from './photos/hamster.jpg'
import racoon from './photos/racoon.jpg'
import fox from './photos/fox.jpg'
import { StaticImageData } from 'next/image'

export interface AnimalImage {
    src: StaticImageData;
    id: string;
    name: string;
    color: string;
}

export const animalImages: AnimalImage[] = [
    {
        src: cat,
        id: '1',
        name: 'cat',
        color: '#EB8831'
    },
    {
        src: dog,
        id: '2',
        name: 'dog',
        color: '#914E0F'
    },
    {
        src: fox,
        id: '3',
        name: 'fox',
        color: '#B34818'
    },
    {
        src: hamster,
        id: '4',
        name: 'hamster',
        color: '#C6A385'
    },
    {
        src: rabbit,
        id: '5',
        name: 'rabbit',
        color: '#C9D3D4'
    },
    {
        src: racoon,
        id: '6',
        name: 'racoon',
        color: '#5C3937'
    },
    {
        src: wolf,
        id: '7',
        name: 'wolf',
        color: '#AABDC4'
    }
]