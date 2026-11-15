export async function getPortfolio() {
  const res = await fetch("/api/portfolio");
  if (!res.ok) throw new Error("Could not load the portfolio");
  return res.json();
}

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function getPortfolio() {
  const res = await fetch(`${API_URL}/api/portfolio`);

  if (!res.ok) {
    throw new Error("Could not load the portfolio");
  }

  return res.json();
}
