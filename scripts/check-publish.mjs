import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());
const missing = [];
const url = process.env.NEXT_PUBLIC_SITE_URL;
try {
  const parsed = new URL(url || "");
  if (
    parsed.protocol !== "https:" ||
    ["localhost", "127.0.0.1", "example.com"].includes(parsed.hostname) ||
    parsed.username ||
    parsed.password ||
    parsed.pathname !== "/" ||
    parsed.search ||
    parsed.hash
  )
    throw new Error("URL inválida");
} catch {
  missing.push(
    "NEXT_PUBLIC_SITE_URL: configure a origem HTTPS real, sem caminho ou parâmetros.",
  );
}
if (
  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  )
)
  missing.push(
    "NEXT_PUBLIC_CONTACT_EMAIL: informe o e-mail profissional confirmado.",
  );
for (const [key, host] of [
  ["NEXT_PUBLIC_GITHUB_URL", "github.com"],
  ["NEXT_PUBLIC_LINKEDIN_URL", "www.linkedin.com"],
]) {
  try {
    const parsed = new URL(process.env[key] || "");
    if (
      parsed.protocol !== "https:" ||
      ![host, host.replace("www.", "")].includes(parsed.hostname) ||
      parsed.pathname === "/"
    )
      throw new Error("Perfil inválido");
  } catch {
    missing.push(`${key}: informe o perfil profissional confirmado.`);
  }
}
if (missing.length) {
  console.error(
    "Configuração de publicação pendente:\n" +
      missing.map((item) => `- ${item}`).join("\n"),
  );
  process.exitCode = 1;
} else
  console.log(
    "Configuração pública válida. Confirme também status, responsabilidades e links em src/data/projects.ts antes de publicar.",
  );
