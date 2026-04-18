# Multi-Tool Agent Skills Starter Kit

Starter kit agnostico de herramienta para construir flujos de trabajo con agentes, skills, reglas, contexto compartido y adapters ligeros.

La idea del repo es simple:

- los humanos necesitan una entrada clara
- los agentes necesitan contratos estables
- ambos deben trabajar sobre la misma estructura real

Por eso este repo separa dos capas:

- navegacion humana corta en `README.md` y `runbooks/`
- contratos canonicos para agentes en `AGENTS.md`, `agents/`, `skills/`, `rules/`, `context/` y `creators/`

## Empieza Aqui

### Si eres humano

Lee esto en orden:

1. [README.md](README.md) para entender el mapa corto del repo.
2. [runbooks/start-here.md](runbooks/start-here.md) para elegir la ruta correcta segun lo que quieres hacer.
3. [AGENTS.md](AGENTS.md) solo cuando necesites el contrato operativo completo.

### Si eres un agente

Empieza en:

1. [AGENTS.md](AGENTS.md) como contrato primario de routing.
2. `rules/` y `context/` segun el flujo elegido.
3. `agents/`, `skills/`, `checklists/` y `creators/` solo cuando el trabajo lo requiera.

## Que Hay En El Repo

| Carpeta | Para humanos | Para agentes |
| --- | --- | --- |
| `agents/` | roles reutilizables del flujo | paquetes canonicos de decision y handoff |
| `skills/` | capacidades reutilizables | contratos operativos portables |
| `rules/` | restricciones compartidas | fuente de verdad de comportamiento |
| `context/` | contexto estable del proyecto | contexto reusable para routing y ejecucion |
| `checklists/` | definicion de terminado | puertas concretas de calidad |
| `runbooks/` | caminos guiados y onboarding | apoyo operativo humano |
| `creators/` | generacion guiada de artefactos | contratos y cuestionarios de creacion |
| `templates/` | puntos de partida minimos | esqueletos canonicos |
| `adapters/` | como aterrizar el starter en cada host | mapeo host-specific |
| `distribution/` | superficie instalable | manifiesto y export map |
| `plugins/` | wrappers nativos locales | integraciones de host |

## Rutas Rapidas

### Quiero usar el starter

1. Completa el contexto base en [context/README.md](context/README.md).
2. Revisa [runbooks/new-project-bootstrap.md](runbooks/new-project-bootstrap.md).
3. Elige el host correcto en `adapters/` o `plugins/`.
4. Valida la distribucion antes de publicar cambios.

### Quiero ejecutar trabajo con agentes

Usa este flujo:

1. `business-agent` para aclarar objetivo, alcance y aceptacion.
2. `spec-agent` para convertir la intencion en un contrato ejecutable.
3. `orchestrator-agent` para partir y enrutar el trabajo.
4. `implementation-agent` para aplicar cambios.
5. `review-agent` para revisar riesgo y evidencia.
6. `docs-agent` para alinear documentacion y onboarding.

### Quiero extender el starter

1. Usa [runbooks/start-here.md](runbooks/start-here.md) para decidir si necesitas un agente, skill, regla, contexto, checklist, runbook o template.
2. Si falta un artefacto reusable, entra al flujo de `creators/`.
3. Usa las plantillas minimas en `templates/` solo cuando no exista ya un artefacto guiado mejor.

## Instalacion

```bash
npm install
```

```bash
npm run validate:distribution
```

```bash
npx skills add JYBLOCKS/agents-skills-starter-kit
```

## Hosts Soportados

| Host | Instalacion | Tipo |
| --- | --- | --- |
| Claude Code | `npx skills add JYBLOCKS/agents-skills-starter-kit -a claude-code` | Universal |
| Codex | Local plugin: `plugins/ai-starter-kit` | Nativo |
| Codex fallback | `npx skills add JYBLOCKS/agents-skills-starter-kit -a codex` | Universal |
| Gemini CLI | `gemini extensions install https://github.com/JYBLOCKS/agents-skills-starter-kit` | Nativo |
| Gemini CLI fallback | `npx skills add JYBLOCKS/agents-skills-starter-kit -a gemini-cli` | Universal |
| Cursor | `npx skills add JYBLOCKS/agents-skills-starter-kit -a cursor` | Universal |
| Windsurf | `npx skills add JYBLOCKS/agents-skills-starter-kit -a windsurf` | Universal |
| GitHub Copilot | `npx skills add JYBLOCKS/agents-skills-starter-kit -a github-copilot` | Universal |
| Cline | `npx skills add JYBLOCKS/agents-skills-starter-kit -a cline` | Universal |
| Fallback | `npx skills add JYBLOCKS/agents-skills-starter-kit` | Universal |

## Que Leer Segun La Tarea

| Si quieres... | Lee primero | Luego |
| --- | --- | --- |
| entender el repo rapido | [runbooks/start-here.md](runbooks/start-here.md) | [AGENTS.md](AGENTS.md) |
| cambiar el flujo de agentes | [AGENTS.md](AGENTS.md) | `agents/`, `skills/`, `rules/`, `context/` |
| crear un artefacto nuevo | [creators/README.md](creators/README.md) | `creators/CONTRACT.md`, `creators/matrix.md` |
| agregar un agente | [agents/README.md](agents/README.md) | `templates/agent/`, `distribution/manifest.json` |
| agregar una skill | [skills/README.md](skills/README.md) | `templates/skill/`, `rules/skill-rules.md` |
| documentar un proceso | [runbooks/README.md](runbooks/README.md) | `checklists/`, `context/` si aplica |
| tocar la distribucion | [distribution/README.md](distribution/README.md) | `distribution/manifest.json`, `package.json` |

## Validacion

Antes de cerrar cambios estructurales:

```bash
npm run validate:distribution
```

Comprobacion local del catalogo:

```bash
npx skills add . -l
```

Comprobaciones recomendadas:

- confirma que los paths exportados en `distribution/manifest.json` existen
- confirma que el host wrapper afectado sigue resolviendo el repo real
- confirma que `AGENTS.md`, este `README.md` y `runbooks/start-here.md` siguen contando la misma historia

## Archivos Mas Importantes

- [runbooks/start-here.md](runbooks/start-here.md): entrada humana corta
- [AGENTS.md](AGENTS.md): contrato primario de routing y artifact creation
- [distribution/manifest.json](distribution/manifest.json): catalogo exportado
- [context/README.md](context/README.md): sistema de contexto reusable
- [creators/README.md](creators/README.md): flujo guiado de creacion
- [runbooks/README.md](runbooks/README.md): runbooks disponibles

## Estructura Del Repo

```text
.
|-- AGENTS.md
|-- README.md
|-- adapters/
|-- agents/
|-- checklists/
|-- context/
|-- creators/
|-- distribution/
|-- plugins/
|-- rules/
|-- runbooks/
|-- skills/
|-- specs/
`-- templates/
```
