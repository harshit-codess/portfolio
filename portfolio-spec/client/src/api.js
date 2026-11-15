export async function getPortfolio() {
  const res = await fetch("/api/portfolio");
  if (!res.ok) throw new Error("Could not load the portfolio");
  return res.json();
}
