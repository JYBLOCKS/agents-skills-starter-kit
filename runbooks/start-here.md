---
name: start-here
description: Human-first navigation guide for choosing the right entry point in the starter kit.
trigger: Use this when a contributor needs to understand the repo quickly without reading every contract first.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the short human navigation path for the repository, but does not replace the canonical contracts in AGENTS, agents, skills, rules, context, or creators.
  auto-invoke: false
allowed-tools:
  - generic
  - openai
  - claude-code
  - opencode
  - cursor
  - windsurf
  - github-copilot
  - cline
  - gemini-cli
  - codex
---
# Start Here

Este documento existe para humanos.

No reemplaza los contratos del repo. Solo te ayuda a llegar al archivo correcto mas rapido.

## Primero Entiende La Regla Del Repo

El starter intenta mantener dos cosas al mismo tiempo:

- legibilidad para humanos
- estabilidad para agentes y hosts

Eso significa:

- no inventar formatos paralelos
- no esconder la estructura real
- no duplicar contratos si ya existe una fuente canonica

## Si Quieres Usar El Starter

Lee en este orden:

1. [README.md](../README.md)
2. [context/README.md](../context/README.md)
3. [runbooks/new-project-bootstrap.md](new-project-bootstrap.md)
4. el adapter o plugin del host que vayas a usar

## Si Quieres Ejecutar Trabajo En El Repo

Usa este mapa:

| Necesidad | Punto de entrada |
| --- | --- |
| aclarar objetivo y alcance | [agents/business-agent/agent.md](../agents/business-agent/agent.md) |
| escribir una spec | [agents/spec-agent/agent.md](../agents/spec-agent/agent.md) |
| dividir o enrutar trabajo | [agents/orchestrator-agent/agent.md](../agents/orchestrator-agent/agent.md) |
| implementar cambios | [agents/implementation-agent/agent.md](../agents/implementation-agent/agent.md) |
| revisar riesgos o regresiones | [agents/review-agent/agent.md](../agents/review-agent/agent.md) |
| sincronizar docs | [agents/docs-agent/agent.md](../agents/docs-agent/agent.md) |

## Si Quieres Extender El Starter

Haz esta pregunta primero:

> Lo que quiero agregar, ¿es una capacidad reusable o solo una necesidad puntual?

Si es reusable:

- nuevo rol reusable: crea un agente
- nueva capacidad reusable: crea una skill
- restriccion compartida: crea o ajusta una regla
- conocimiento compartido: crea o ajusta contexto
- puerta de calidad: crea o ajusta checklist
- proceso repetible: crea o ajusta runbook
- base estable para nuevos artefactos: crea o ajusta template
- generacion guiada de artefactos: entra por `creators/`

## Si No Sabes Que Artefacto Tocar

Lee esto:

1. [AGENTS.md](../AGENTS.md) para el routing completo.
2. [creators/README.md](../creators/README.md) si sospechas que falta un artefacto reusable.
3. [creators/matrix.md](../creators/matrix.md) si quieres ver ownership por familia.

## Lo Que No Conviene Hacer

- no pongas reglas globales dentro de un agente si aplican a todo el repo
- no metas contexto reusable dentro de prompts locales
- no crees un artefacto nuevo si uno existente ya cubre el caso
- no copies explicaciones largas en varios `README` si basta con enlazar la fuente canonica

## Regla Practica

Si un humano necesita entender el repo:

- empieza en `README.md`
- usa este runbook para elegir camino
- entra a `AGENTS.md` solo cuando ya sepas que parte del sistema te importa
