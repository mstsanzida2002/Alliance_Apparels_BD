export async function apiFetch(url: string, revalidate = 30) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      next: { revalidate }
    })

    if (!res.ok) {
      throw new Error("API Error")
    }

    const data = await res.json()
    return Array.isArray(data) ? data : []
  } catch (error) {
    // API unreachable or empty database: render sections with no data instead of crashing
    console.error(`apiFetch ${url} failed:`, error instanceof Error ? error.message : error)
    return []
  }
}
