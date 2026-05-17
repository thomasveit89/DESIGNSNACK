import { NextResponse } from 'next/server'

const GITHUB_USERNAME = 'thomasveit89'
const GITHUB_HEADERS = {
  'Accept': 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
}

export type CommitData = {
  sha: string
  message: string
  repo: string
  repoShort: string
  repoUrl: string
  date: string
}

export async function GET() {
  try {
    const eventsRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=30`,
      { next: { revalidate: 300 }, headers: GITHUB_HEADERS }
    )

    if (!eventsRes.ok) {
      return NextResponse.json({ commits: [] })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const events: any[] = await eventsRes.json()

    const commits: CommitData[] = []

    for (const event of events) {
      if (event.type !== 'PushEvent') continue

      const repoName: string = event.repo.name
      const repoShort = repoName.split('/')[1] ?? repoName
      const repoUrl = `https://github.com/${repoName}`
      const date: string = event.created_at

      for (const commit of (event.payload.commits ?? [])) {
        const message: string = commit.message
        if (message.startsWith('Merge')) continue

        commits.push({
          sha: (commit.sha as string).slice(0, 7),
          message: message.split('\n')[0],
          repo: repoName,
          repoShort,
          repoUrl,
          date,
        })

        if (commits.length >= 3) break
      }

      if (commits.length >= 3) break
    }

    return NextResponse.json({ commits })
  } catch {
    return NextResponse.json({ commits: [] })
  }
}
