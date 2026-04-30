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
    // 1. Get user's repos sorted by most recently pushed
    const reposRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=5&type=public`,
      { next: { revalidate: 300 }, headers: GITHUB_HEADERS }
    )

    if (!reposRes.ok) {
      return NextResponse.json({ commits: [] })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const repos: any[] = await reposRes.json()

    // 2. Fetch latest commit from each of the top 3 repos in parallel
    const top3 = repos.slice(0, 3)

    const commitResults = await Promise.all(
      top3.map(async (repo) => {
        try {
          const res = await fetch(
            `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits?per_page=1`,
            { next: { revalidate: 300 }, headers: GITHUB_HEADERS }
          )
          if (!res.ok) return null
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const [commit]: any[] = await res.json()
          if (!commit) return null

          const message: string = commit.commit.message
          // skip merge commits
          if (message.startsWith('Merge')) return null

          return {
            sha: commit.sha.slice(0, 7),
            message: message.split('\n')[0],
            repo: `${GITHUB_USERNAME}/${repo.name}`,
            repoShort: repo.name,
            repoUrl: repo.html_url,
            date: commit.commit.author.date,
          } satisfies CommitData
        } catch {
          return null
        }
      })
    )

    const commits = commitResults.filter(Boolean) as CommitData[]

    return NextResponse.json({ commits })
  } catch {
    return NextResponse.json({ commits: [] })
  }
}
