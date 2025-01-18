            case "figemoji":
            case "figroblox":
            case "figmeme":
            case "figanime":
            case "figamor":
            case "figcoreana":
            case "figraiva":
            case "figengracada":
            case "figdesenho":
            case "fig":
              if (!q)
                return reply(
                  "Insira a quantidade de figurinhas que deseja que eu envie."
                );
              if (!Number(q.trim()) || Number(q.trim()) > 10) {
                return reply(
                  "Digite a quantidade de figurinhas que deseja que eu envie. O limite é de 10."
                );
              }

              const owner = "luskizera"; // Teu nome no GitHub
              const repo = "figus2"; // Nome do teu repositório
              const botOperator = conn; // Certifique-se de que `conn` é o operador do bot correto

              async function figugit() {
                try {
                  const response = await fetch(
                    `https://api.github.com/repos/${owner}/${repo}/contents/${command}`
                  );
                  const data = await response.json();

                  if (!Array.isArray(data) || data.length === 0) {
                    return reply(
                      "Nenhuma figurinha encontrada no repositório."
                    );
                  }

                  const randomIndex = Math.floor(Math.random() * data.length);
                  const stickerUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/${command}/${data[randomIndex].name}`;

                  // Verificar se a URL da figurinha é válida
                  const stickerResponse = await fetch(stickerUrl);
                  if (!stickerResponse.ok) {
                    throw new Error("Falha ao obter a figurinha.");
                  }

                  // Enviar a figurinha
                  await botOperator.sendMessage(from, {
                    sticker: { url: stickerUrl },
                  });
                } catch (error) {
                  console.error("Erro ao buscar ou enviar figurinha:", error);
                  reply(
                    "Ocorreu um erro ao enviar a figurinha. Tente novamente mais tarde."
                  );
                }
              }
