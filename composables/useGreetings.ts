import type { Greeting, GreetingData } from '~/types/greeting'

export const useGreetings = () => {
  const findGreeting = async (slug: string): Promise<Greeting | null> => {
    try {
      // Fetch the JSON file from /data/greetings.json
      const response = await fetch('/data/greetings.json')

      if (!response.ok) {
        console.error('Failed to load greetings data')
        return null
      }

      const data: GreetingData = await response.json()

      // Find the greeting by slug
      const greeting = data.greetings.find(g => g.slug === slug)

      return greeting || null
    } catch (error) {
      console.error('Error loading greeting:', error)
      return null
    }
  }

  // Format date string like "31.03.2026" to "31. März 2026"
  const formatValidUntil = (dateString: string): string => {
    const months = [
      'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
      'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
    ]

    const [day, month, year] = dateString.split('.')
    const monthIndex = parseInt(month, 10) - 1

    return `${parseInt(day, 10)}. ${months[monthIndex]} ${year}`
  }

  return {
    findGreeting,
    formatValidUntil
  }
}
