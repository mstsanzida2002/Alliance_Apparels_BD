import { apiFetch } from "./api";

export async function getCatalogs() {
  const data = await apiFetch("/api/catalog", 30);

  return data ?? [];
}
