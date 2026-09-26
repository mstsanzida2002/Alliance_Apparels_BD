import { apiFetch } from "./api";

export async function getServicesSections() {
  const data = await apiFetch("/api/services", 30);

  return data ?? [];
}
