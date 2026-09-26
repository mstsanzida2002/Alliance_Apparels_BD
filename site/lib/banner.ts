import { apiFetch } from "./api"

export async function getBannerSlides() {
  const data = await apiFetch("/api/heros", 30)

  return data ?? []
}