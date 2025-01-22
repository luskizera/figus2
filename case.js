              /* Puxa da pasta correspondente*/

            case "figemoji":
            case "figroblox":
            case "figmeme":
            case "figanime":
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

              for (let i = 0; i < q; i++) {
                await sleep(1880); // Intervalo entre envios (mínimo de 1000 ms)
                figugit();
              }
              break;

              /* Puxa aleatoriamente*/

              case "figurinhas":
                if (!q)
                  return reply(
                    "Insira a quantidade de figurinhas que deseja que eu envie."
                  );
                if (!Number(q.trim()) || Number(q.trim()) > 10) {
                  return reply(
                    "Digite a quantidade de figurinhas que deseja que eu envie. O limite é de 10."
                  );
                }

                const gitOwner = "luskizera"; // Teu nome no GitHub
                const gitRepo = "figus2"; // Nome do teu repositório
                const gitBotOperator = conn; // Certifique-se de que `conn` é o operador do bot correto

                async function multiFolderFigugit() {
                  try {
                    // Obter a lista de pastas no repositório
                    const responseFolders = await fetch(
                      `https://api.github.com/repos/${gitOwner}/${gitRepo}/contents`
                    );
                    const folders = await responseFolders.json();

                    // Filtrar apenas pastas
                    const folderNames = folders
                      .filter((item) => item.type === "dir")
                      .map((item) => item.name);

                    if (folderNames.length === 0) {
                      return reply("Nenhuma pasta encontrada no repositório.");
                    }

                    // Escolher uma figurinha aleatória de qualquer pasta
                    const randomFolder =
                      folderNames[Math.floor(Math.random() * folderNames.length)];
                    const responseStickers = await fetch(
                      `https://api.github.com/repos/${gitOwner}/${gitRepo}/contents/${randomFolder}`
                    );
                    const stickers = await responseStickers.json();

                    if (!Array.isArray(stickers) || stickers.length === 0) {
                      return reply("Nenhuma figurinha encontrada na pasta.");
                    }

                    // Escolher uma figurinha aleatória
                    const randomIndex = Math.floor(Math.random() * stickers.length);
                    const stickerUrl = `https://raw.githubusercontent.com/${gitOwner}/${gitRepo}/main/${randomFolder}/${stickers[randomIndex].name}`;

                    // Verificar se a URL da figurinha é válida
                    const stickerResponse = await fetch(stickerUrl);
                    if (!stickerResponse.ok) {
                      throw new Error("Falha ao obter a figurinha.");
                    }

                    // Enviar a figurinha
                    await gitBotOperator.sendMessage(from, {
                      sticker: { url: stickerUrl },
                    });
                  } catch (error) {
                    console.error("Erro ao buscar ou enviar figurinha:", error);
                    reply(
                      "Ocorreu um erro ao enviar a figurinha. Tente novamente mais tarde."
                    );
                  }
                }

                for (let i = 0; i < q; i++) {
                  await sleep(1880); // Intervalo entre envios (mínimo de 1000 ms)
                  multiFolderFigugit();
                }
                break;
