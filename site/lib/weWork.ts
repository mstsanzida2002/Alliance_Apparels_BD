import { apiFetch } from "./api"

export async function getWeWorks() {
  const data = await apiFetch("/api/we-work", 30)

  return data ?? []
}