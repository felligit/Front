import { basePath, apiVersion } from "./config";

export function contactFormApi(data) {
  const url = `${basePath}/${apiVersion}/contac/send-email`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })

    .then((result) => {
      if (result.user) {
        return { ok: true, message: "Email Enviado correctamente" };
      }
      return { ok: false, message: result.message };
    })
    .catch((err) => {
      return { ok: false, message: err.message };
    });
}
