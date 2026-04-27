export type FeedItem = {
  id: string
  type: 'image' | 'video' | 'youtube'
  title: string
  src?: string        // image or video file path
  youtubeId?: string  // YouTube video ID (e.g. 'dQw4w9WgXcQ')
  poster?: string     // optional thumbnail for video type
  href?: string
}

export const feedItems: FeedItem[] = [
  {
    id: 'joyo-demo',
    type: 'video',
    title: 'Joyo — product demo',
    src: '/assets/feed/joyo-product-video.mp4',
  },
  {
    id: 'empire-builder',
    type: 'video',
    title: 'Empire Builder',
    src: '/assets/feed/empire-builder.mp4',
  },
  {
    id: 'otto-ai-assistant',
    type: 'youtube',
    title: 'Otto – AI assistant',
    youtubeId: 'LMhXwgfjUII',
  },
  {
    id: 'adidas',
    type: 'video',
    title: 'Adidas',
    src: '/assets/feed/adidas.mp4',
  },
  {
    id: 'laws-and-patterns',
    type: 'video',
    title: 'Laws & Patterns',
    src: '/assets/feed/laws-and-patterns.mp4',
  },
]
