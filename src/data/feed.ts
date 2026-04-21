export type FeedItem = {
  id: string
  type: 'image' | 'video'
  title: string
  date: string
  src: string
  href?: string
  aspectRatio?: 'portrait' | 'landscape' | 'square'
}

export const feedItems: FeedItem[] = [
  {
    id: '1',
    type: 'image',
    title: 'Joyo — gift flow UI',
    date: '2026-04-16',
    src: 'https://www.figma.com/api/mcp/asset/bc0e1842-c65f-497e-b265-78d8756448e7',
    aspectRatio: 'landscape',
  },
  {
    id: '2',
    type: 'image',
    title: 'Core banking design system',
    date: '2026-04-10',
    src: 'https://www.figma.com/api/mcp/asset/23305b17-50d2-4ba6-b3f4-5ae6ab759605',
    aspectRatio: 'landscape',
  },
  {
    id: '3',
    type: 'image',
    title: 'UI exploration',
    date: '2026-04-05',
    src: 'https://www.figma.com/api/mcp/asset/55f2eed3-d621-4031-a856-5f6f33eea977',
    aspectRatio: 'square',
  },
  {
    id: '4',
    type: 'image',
    title: 'Mobile component library',
    date: '2026-03-28',
    src: 'https://www.figma.com/api/mcp/asset/7ac82a7a-a07f-44bc-99d9-5e75aa6923e9',
    aspectRatio: 'portrait',
  },
  {
    id: '5',
    type: 'image',
    title: 'AI assistant interface',
    date: '2026-03-20',
    src: 'https://www.figma.com/api/mcp/asset/c98022ca-384d-4e07-a270-86ce3536b27d',
    aspectRatio: 'landscape',
  },
  {
    id: '6',
    type: 'image',
    title: 'Dashboard iteration',
    date: '2026-03-10',
    src: 'https://www.figma.com/api/mcp/asset/feb51278-1c7b-4dfe-b59b-5f5bbb63f36f',
    aspectRatio: 'square',
  },
  {
    id: '7',
    type: 'image',
    title: 'Typography system',
    date: '2026-02-25',
    src: 'https://www.figma.com/api/mcp/asset/56f07e1e-b88a-423e-854b-a0ae2cde3482',
    aspectRatio: 'portrait',
  },
  {
    id: '8',
    type: 'image',
    title: 'Colour explorations',
    date: '2026-02-10',
    src: 'https://www.figma.com/api/mcp/asset/4b712f79-08dc-4636-a89a-eae0d5a7f3af',
    aspectRatio: 'square',
  },
  {
    id: '9',
    type: 'image',
    title: 'Component patterns',
    date: '2026-01-30',
    src: 'https://www.figma.com/api/mcp/asset/996e173d-daea-4ac1-b6d4-9d9012f5769d',
    aspectRatio: 'landscape',
  },
]
