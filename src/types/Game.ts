export type GalleryItem = {
  type: 'image' | 'video'
  url: string
  label: string
}

export type Game = {
  id: number
  title: string
  category: string
  platforms: string[]
  image: string
  heroImage: string
  description: string
  oldPrice?: number
  price: number
  featured?: boolean
  gallery: GalleryItem[]
}
