import { defineStore } from 'pinia';

import project1 from '@/assets/img/project1.png';
import project2 from '@/assets/img/project2.png';
import project3 from '@/assets/img/project3.png';
import project4 from '@/assets/img/project4.png';
import project5 from '@/assets/img/project5.png';

import project1Unload from '@/assets/img/project1-unload.png';
import project2Unload from '@/assets/img/project2-unload.png';
import project3Unload from '@/assets/img/project3-unload.png';
import project4Unload from '@/assets/img/project4-unload.png';
import project5Unload from '@/assets/img/project5-unload.png';

export const useProjectStore = defineStore({
  id: 'projects',
  state: () => ({
    data: [
      {
        img: project1,
        imgUnload: project1Unload,
        name: 'Kuliwisata.id',
        desc: 'Kuliwisata.id is a web application which function is to explore culinary and tourism in Bali, Indonesia. Made by native HTML, CSS, and JS.',
        url: 'https://github.com/RobertBudiJr/HTML-CSS-JS--Kuliwisata.id',
      },
      {
        img: project2,
        imgUnload: project2Unload,
        name: 'Ingfo.id',
        desc: 'Ingfo.id is an web application which main function is to provide information about Coivd-19 vaccinations. Made by native HTML, CSS, and JS.',
        url: 'https://github.com/RobertBudiJr/HTML-CSS-JS--Ingfo.id',
      },
      {
        img: project4,
        imgUnload: project4Unload,
        name: 'Kuliwisata.id V2',
        desc: 'Kuliwisata.id V2 is website that provide information about Travel Destination, Food Culinary in Indonesia. Made by VueJs, Bootstrap 5, and SASS.',
        url: 'https://github.com/RobertBudiJr/VueJs--Kuliwisata.id-V2',
      },
      {
        img: project3,
        imgUnload: project3Unload,
        name: 'Personal Portofolio',
        desc: 'Made for my personal portofolio, with functioning contact form. Currently still in update phase. Made by VueJs, Bootstrap 5, and SASS.',
        url: 'https://github.com/RobertBudiJr/VueJs--Cicellion-Portofolio',
      },
      {
        img: project5,
        imgUnload: project5Unload,
        name: `Ray's Personal Portofolio`,
        desc: `Freelance project for client's personal portofolio website. Made by VueJs, Bootstrap 5, and SASS`,
        isLive: true,
        url: 'https://projectmu.id/',
      },
    ],
    data2: [
      {
        name: 'Natours',
        desc: 'Natours is a web application about tour booking. This app is made as study case to learn SASS, HTML, and JS. And to practice various amazing hover effects.',
        url: 'https://github.com/RobertBudiJr/CSS-Sass--Natours',
      },
      {
        name: 'Trillo',
        desc: 'Trillo is a web application about hotel booking, and review. This app is made as study case to learn SASS, HTML, and JS.',
        url: 'https://github.com/RobertBudiJr/CSS-Sass--Trillo',
      },
      {
        name: 'Nexter',
        desc: 'Nexter is a web application about mansion property. This app is made as study case to learn SASS, HTML, and JS.',
        url: 'https://github.com/RobertBudiJr/CSS-Sass--Nexter',
      },
      {
        name: 'Microsoft Web Duplicate',
        desc: 'Like it’s name, this project is a duplicate from Microsoft Website. This app is made as study case to learn Responsive Page, HTML, and CSS. ',
        url: 'https://github.com/RobertBudiJr/HTML-CSS--Microsoft-Duplicate',
      },
      {
        name: 'Future Tech Webpage',
        desc: 'Future Tech is a web application about future techs. This app is made as challenge using SASS, HTML, and JS.',
        url: 'https://github.com/RobertBudiJr/CSS-Sass--FutureTechWebpage',
      },
      {
        name: 'Pig Game',
        desc: 'Pig Game is a web dice game. Mainly focus on Javascript for complex mechanism of the game.',
        url: 'https://github.com/RobertBudiJr/Javascript--PigGame',
      },
      {
        name: 'Wallpaper Gallery',
        desc: 'Is a web application that provide wallpaper image to user that can be downloaded. Was made to learn Bootstrap.',
        url: 'https://github.com/RobertBudiJr/Boostrap--Wallpaper-Gallery',
      },
      {
        name: 'Meme Generator',
        desc: 'Based on its name, Meme Generator is a web application which generate meme randomly based on data i provide. Made by React JS as study case.',
        url: 'https://github.com/RobertBudiJr/ReactJs--ThirdProject',
      },
    ],
  }),
});
