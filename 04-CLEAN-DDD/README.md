# Projeto: Copiloto de IA para Automação de E-mails

## 1. Visão Geral do Projeto

Este projeto é uma solução de automação inteligente (`no-code`) que funciona como um "Copiloto de IA" para o gerenciamento de e-mails. O sistema foi construído para identificar e-mails específicos de forma automática, utilizar a Inteligência Artificial Generativa para criar respostas contextuais e profissionais, enviar essas respostas e registrar todo o processo para auditoria, sem a necessidade de intervenção humana.

O objetivo principal é resolver o desafio de lidar com um alto volume de comunicações repetitivas, liberando tempo para tarefas de maior valor estratégico, conforme proposto no desafio acadêmico.

## 2. Ferramentas Utilizadas

A solução integra um conjunto de ferramentas acessíveis e poderosas que, juntas, formam um ecossistema de automação completo:

- **Gmail:** Serve como a porta de entrada e saída do fluxo. É utilizado para receber os e-mails, acionar a automação através de filtros e marcadores, e para enviar a resposta final gerada pela IA.
- **Make.com:** É o coração do projeto. Esta plataforma de automação visual (iPaaS) conecta todas as ferramentas e orquestra a lógica do fluxo de trabalho, desde a detecção do e-mail até o envio da resposta.
- **Google Sheets:** Funciona como nosso banco de dados e painel de controle. Cada e-mail processado é registrado em uma planilha, permitindo um acompanhamento claro do status (`Processando...`, `Respondido`) e a auditoria de todas as interações.
- **Google Gemini AI:** É o cérebro da operação. Este Modelo de Linguagem (LLM) do Google é responsável por analisar o conteúdo do e-mail recebido e gerar uma resposta coesa, personalizada e alinhada com as instruções do prompt.

## 3. Funcionamento do Fluxo (Workflow)

A automação opera em um ciclo contínuo e 100% automático, seguindo 5 etapas principais:

1.  **Gatilho (Trigger) no Gmail:** Um filtro pré-configurado no Gmail monitora todos os e-mails recebidos. Quando um e-mail corresponde aos critérios definidos (ex: palavras-chave no assunto, remetente específico), o filtro aplica automaticamente o marcador "Processar com IA".
2.  **Detecção no Make.com:** O cenário no Make.com está programado para verificar periodicamente o Gmail em busca de novos e-mails com o marcador "Processar com IA".
3.  **Registro e Processamento:** Ao encontrar um e-mail, o Make.com executa a seguinte sequência:
    - **Adiciona uma Linha no Google Sheets:** As informações iniciais do e-mail (remetente, assunto, data, corpo do texto) são salvas em uma nova linha na planilha, e o status é definido como "Processando...".
    - **Gera Conteúdo com IA:** O assunto e o corpo do e-mail são enviados para o Google Gemini através de um prompt detalhado, que instrui a IA a gerar uma resposta formal e personalizada.
4.  **Atualização e Resposta:**
    - **Atualiza a Linha no Google Sheets:** A resposta gerada pela IA é salva na mesma linha da planilha, e o status é atualizado para "Respondido".
    - **Envia o E-mail de Resposta:** O Make.com utiliza o Gmail para enviar a resposta gerada diretamente ao remetente original.
5.  **Ciclo Contínuo:** O cenário aguarda o próximo ciclo para verificar novos e-mails marcados.

## 4. Prompt Utilizado

O sucesso da IA Generativa depende diretamente da qualidade do prompt. O seguinte prompt foi cuidadosamente elaborado para guiar o Google Gemini a produzir o resultado desejado:
