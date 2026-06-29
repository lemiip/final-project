const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export function publicUrl(path) {
  if (!path) return path;
  if (/^(https?:|data:|blob:)/.test(path)) return path;

  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${baseUrl}${cleanPath}`;
}

export async function fetchPublicJson(path) {
  const response = await fetch(publicUrl(path));

  if (!response.ok) {
    throw new Error(`Failed to load ${path}: ${response.status}`);
  }

  return response.json();
}
