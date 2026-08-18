import bannerSpiderMan from '../assets/images/banner-homem-aranha.png'
import diablo from '../assets/images/diablo.png'
import hogwarts from '../assets/images/fundo_hogwarts.png'
import resident from '../assets/images/resident.png'
import starWars from '../assets/images/star_wars.png'
import zelda from '../assets/images/zelda.png'
import type { Game } from '../types/Game'

export const games: Game[] = [
  {
    id: 1,
    title: 'Marvel’s Spider-Man: Miles Morales',
    category: 'Ação e aventura',
    platforms: ['PlayStation 5', 'PC'],
    image: bannerSpiderMan,
    heroImage: bannerSpiderMan,
    description:
      'Na mais nova aventura do universo de Spider-Man, o adolescente Miles Morales se adapta à sua nova casa enquanto segue os passos de seu mentor, Peter Parker, para se tornar um novo Spider-Man.',
    oldPrice: 249.9,
    price: 199.9,
    featured: true,
    gallery: [
      { type: 'video', url: bannerSpiderMan, label: 'Trailer do jogo' },
      { type: 'image', url: bannerSpiderMan, label: 'Miles Morales em ação' },
    ],
  },
  {
    id: 2,
    title: 'The Legend of Zelda: Tears of the Kingdom',
    category: 'Aventura',
    platforms: ['Nintendo Switch'],
    image: zelda,
    heroImage: zelda,
    description:
      'Explore as terras e os céus de Hyrule em uma aventura épica. Use novas habilidades para criar, descobrir caminhos e enfrentar os perigos que ameaçam o reino.',
    oldPrice: 349.9,
    price: 299.9,
    gallery: [
      { type: 'video', url: zelda, label: 'Trailer de Zelda' },
      { type: 'image', url: zelda, label: 'Aventura em Hyrule' },
    ],
  },
  {
    id: 3,
    title: 'Star Wars Jedi: Survivor',
    category: 'Ação e aventura',
    platforms: ['PlayStation 5', 'Xbox Series', 'PC'],
    image: starWars,
    heroImage: starWars,
    description:
      'A jornada de Cal Kestis continua neste jogo de ação em terceira pessoa. Enfrente novos inimigos e explore diferentes mundos em uma galáxia cada vez mais perigosa.',
    oldPrice: 299.9,
    price: 229.9,
    gallery: [
      { type: 'video', url: starWars, label: 'Trailer de Star Wars Jedi' },
      { type: 'image', url: starWars, label: 'Cal Kestis com seu sabre de luz' },
    ],
  },
  {
    id: 4,
    title: 'Diablo IV',
    category: 'RPG de ação',
    platforms: ['PlayStation', 'Xbox', 'PC'],
    image: diablo,
    heroImage: diablo,
    description:
      'O mundo de Santuário volta a mergulhar na escuridão. Escolha sua classe, enfrente hordas de inimigos e construa seu herói em uma campanha sombria e intensa.',
    oldPrice: 349.9,
    price: 279.9,
    gallery: [
      { type: 'video', url: diablo, label: 'Trailer de Diablo IV' },
      { type: 'image', url: diablo, label: 'Lilith em Diablo IV' },
    ],
  },
  {
    id: 5,
    title: 'Resident Evil 4',
    category: 'Terror e sobrevivência',
    platforms: ['PlayStation', 'Xbox', 'PC'],
    image: resident,
    heroImage: resident,
    description:
      'Seis anos após o desastre de Raccoon City, Leon S. Kennedy parte para resgatar a filha do presidente em uma vila isolada, onde algo terrível domina os habitantes.',
    oldPrice: 299.9,
    price: 249.9,
    gallery: [
      { type: 'video', url: resident, label: 'Trailer de Resident Evil 4' },
      { type: 'image', url: resident, label: 'Leon em Resident Evil 4' },
    ],
  },
  {
    id: 6,
    title: 'Hogwarts Legacy',
    category: 'RPG de ação',
    platforms: ['PlayStation', 'Xbox', 'Nintendo Switch', 'PC'],
    image: hogwarts,
    heroImage: hogwarts,
    description:
      'Viva uma aventura de mundo aberto ambientada no universo de Harry Potter. Explore Hogwarts, aprenda feitiços e escreva sua própria história no mundo bruxo.',
    oldPrice: 299.9,
    price: 219.9,
    gallery: [
      { type: 'video', url: hogwarts, label: 'Trailer de Hogwarts Legacy' },
      { type: 'image', url: hogwarts, label: 'O castelo de Hogwarts' },
    ],
  },
]

export const featuredGame = games[0]
export const promotionGames = games.slice(1, 5)
export const hogwartsGame = games[5]
