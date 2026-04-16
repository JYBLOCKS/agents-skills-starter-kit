# Multi-Tool Agent Skills Starter Kit

Starter kit agnóstico de herramienta para construir flujos de trabajo con agentes, skills, reglas, contexto compartido y adapters ligeros.

Todo el kit vive en una sola estructura visible. No hay contenido escondido, espejos ni módulos paralelos que haya que mantener aparte. Si quieres agregar o cambiar algo, lo haces en su carpeta real.

## Qué Incluye

- `agents/`: paquetes de agentes para routing, implementación, review, docs y flujos de creación guiada
- `skills/`: skills reutilizables para análisis, specs, ejecución, review, docs y creación de artefactos
- `rules/`: reglas globales y reglas compartidas para agentes y skills
- `context/`: contexto reusable de negocio, producto, técnica, repo y delivery
- `checklists/`: criterios de terminado y puertas de calidad
- `runbooks/`: flujos repetibles para usar y extender el starter
- `creators/`: contratos, cuestionarios y templates para generación guiada de artefactos
- `templates/`: plantillas mínimas para agentes, skills, specs y adapters
- `adapters/`: wrappers ligeros para cada host o herramienta
- `distribution/`: manifiesto y contrato del paquete instalable
- `plugins/`: wrappers nativos locales, por ejemplo para Codex

## Start Here

Si vas a usar el repo como base de trabajo:

1. Lee [AGENTS.md](AGENTS.md) para entender el mapa principal del starter.
2. Completa el contexto base en [context/README.md](context/README.md).
3. Ajusta las reglas compartidas en [rules/README.md](rules/README.md).
4. Revisa los agentes y skills principales en [agents/README.md](agents/README.md) y [skills/README.md](skills/README.md).
5. Usa [runbooks/README.md](runbooks/README.md) si vas a extender el sistema.

## Instalación

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

| Host | Instalación | Tipo |
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

## Flujo Base Del Starter

El camino principal del starter es:

1. Define el contexto reusable en `context/`.
2. Usa `business-agent` para aclarar intención, alcance y aceptación si todavía hay ambigüedad.
3. Usa `spec-agent` para convertir la intención aprobada en una spec ejecutable.
4. Usa `orchestrator-agent` para partir y enrutar el trabajo.
5. Usa `implementation-agent` para aplicar cambios.
6. Usa `review-agent` para revisar riesgos, regresiones y evidencia.
7. Usa `docs-agent` para mantener la documentación alineada.

Los creator agents y creator skills también forman parte del flujo normal del repo cuando quieres generar nuevos artefactos guiados en vez de escribirlos a mano.

## Cómo Agregar O Cambiar Artefactos

### Agregar un agente

Usa `templates/agent/` como base y crea una carpeta nueva en `agents/<nombre>-agent/`.

Cada agente debe definir:

- `agent.md`: identidad, misión, alcance, dependencias y outputs
- `prompt.md`: prompt base para adapters y hosts
- `rules.md`: reglas locales del agente
- `checklist.md`: definición de terminado
- `handoff-template.md`: formato de salida hacia otros agentes
- `example.md`: ejemplo realista de uso

También debes:

- enlazar reglas compartidas desde `rules/`
- enlazar contexto reusable desde `context/`
- actualizar [AGENTS.md](AGENTS.md) si el agente cambia el mapa principal
- actualizar `distribution/manifest.json` si el agente debe formar parte del catálogo exportado

### Agregar una skill

Usa `templates/skill/` y crea `skills/<skill-name>/SKILL.md`.

Cada skill debe incluir:

- metadata frontmatter
- `Purpose`
- `Use When`
- `Do Not Use When`
- `Inputs`
- `Outputs`
- `Workflow`
- `Rules`
- `Checklist`
- `Non-Negotiable Rules`
- `References`
- `Examples`

Puedes agregar `assets/` o `scripts/` solo si realmente aportan valor al uso de la skill.

También debes:

- verificar consistencia con `rules/skill-rules.md`
- enlazar contexto o contratos solo cuando hagan falta
- actualizar `distribution/manifest.json` si la skill debe exportarse

### Agregar o cambiar reglas

Las reglas compartidas viven en `rules/`.

Usa:

- `global-rules.md` para reglas del repo completo
- `agent-rules.md` para reglas compartidas por todos los agentes
- `skill-rules.md` para reglas compartidas por todas las skills
- reglas dentro de `agents/*/rules.md` o `adapters/*/README.md` para comportamiento local

Una buena regla debe ser:

- corta
- accionable
- testeable
- lo bastante general para evitar duplicación innecesaria

Si una regla solo aplica a un agente o skill, no la subas al nivel global.

### Agregar o cambiar contexto

El contexto reusable vive en `context/`.

Usa:

- `business-context.md` para misión, usuarios, valor y restricciones de negocio
- `product-context.md` para prioridades, scope y criterios de aceptación
- `technical-context.md` para arquitectura, estándares, interfaces y dependencias
- `repo-context.md` para estructura del repo, ownership y convenciones
- `delivery-context.md` para lifecycle, review y release expectations

Pon aquí decisiones que deban reutilizar varios agentes o skills. No dupliques ese contexto dentro de paquetes individuales salvo que sea un override intencional.

### Agregar o cambiar checklists

Los checklists viven en `checklists/` y funcionan como puertas concretas de calidad.

Cada checklist debe responder:

- qué debe ser cierto para considerar el paso terminado
- qué evidencia debe existir
- quién suele ser el owner

Úsalos para specs, implementación, review y docs cuando el repositorio necesite una definición de terminado explícita.

### Agregar o cambiar runbooks

Los runbooks viven en `runbooks/` y documentan flujos repetibles.

Úsalos para:

- onboarding
- mantenimiento de distribución
- lifecycle de specs
- ejemplos end-to-end
- flujos de creación guiada

Un runbook debe servir para repetir un proceso sin tener que reinterpretarlo cada vez.

### Agregar o cambiar creators

Los creators viven en `creators/` y sirven para generación guiada de artefactos.

Aquí están:

- `CONTRACT.md`
- `AGENT-CONTRACT.md`
- `SKILL-CONTRACT.md`
- `QUESTIONNAIRE-CONTRACT.md`
- `CREATION-PACKAGE-CONTRACT.md`
- `questionnaires/`
- `templates/`
- `matrix.md`

Si agregas una nueva familia de artefactos guiados:

1. define el cuestionario en `creators/questionnaires/`
2. ajusta el contrato o template si hace falta
3. crea o actualiza el creator agent en `agents/`
4. crea o actualiza la creator skill en `skills/`
5. documenta el flujo en `runbooks/`

### Agregar o cambiar templates

Las plantillas mínimas viven en `templates/`.

Úsalas para:

- nuevos agentes
- nuevas skills
- nuevas specs
- nuevos adapters

Mantén los templates pequeños. Si una complejidad solo aplica a un caso especial, no la metas en la plantilla base.

### Agregar o cambiar adapters

Los adapters viven en `adapters/` y explican cómo mapear el starter a cada host.

Cada adapter debe documentar:

- discovery model
- naming conventions
- mapping hacia prompts, reglas, contexto y skills
- reference vs copy
- minimum setup

Si agregas un host nuevo:

1. parte desde `adapters/generic/`
2. crea `adapters/<host>/`
3. agrega `README.md`
4. agrega `example-setup.md` si aplica
5. actualiza `distribution/manifest.json`
6. actualiza este README solo cuando el path de instalación sea real

## Qué Archivos Tocar Según Lo Que Quieres Hacer

| Quiero... | Carpeta principal | Referencias típicas |
| --- | --- | --- |
| agregar un agente | `agents/` | `rules/`, `context/`, `checklists/`, `AGENTS.md`, `distribution/manifest.json` |
| agregar una skill | `skills/` | `rules/skill-rules.md`, `templates/skill/`, `distribution/manifest.json` |
| ajustar reglas globales | `rules/` | agentes, skills y adapters afectados |
| agregar contexto reusable | `context/` | agentes, skills y specs que lo consumen |
| agregar checklist | `checklists/` | agente o flujo que lo usa |
| documentar un proceso | `runbooks/` | `README.md`, `AGENTS.md` si cambia navegación |
| crear flujos guiados | `creators/`, `agents/`, `skills/` | `runbooks/`, `templates/` |
| agregar un adapter | `adapters/` | `distribution/manifest.json`, `README.md`, `plugins/` o wrapper nativo si aplica |
| cambiar distribución | `distribution/` | `package.json`, `plugins/`, adapters, README |

## Validación

Antes de cerrar cambios estructurales:

```bash
npm run validate:distribution
```

Comprobación local del catálogo:

```bash
npx skills add . -l
```

Comprobaciones recomendadas:

- confirma que los paths exportados en `distribution/manifest.json` existen
- confirma que el host wrapper afectado sigue resolviendo el repo real
- confirma que `AGENTS.md` y este README siguen reflejando el flujo actual

## Archivos Más Importantes

- [AGENTS.md](AGENTS.md): mapa principal del starter
- [distribution/manifest.json](distribution/manifest.json): catálogo exportado
- [distribution/CONTRACT.md](distribution/CONTRACT.md): reglas de distribución
- [agents/README.md](agents/README.md): convención de agentes
- [skills/README.md](skills/README.md): convención de skills
- [context/README.md](context/README.md): sistema de contexto reusable
- [rules/README.md](rules/README.md): sistema de reglas
- [checklists/README.md](checklists/README.md): completion gates
- [runbooks/README.md](runbooks/README.md): flujos repetibles
- [creators/README.md](creators/README.md): generación guiada de artefactos
- [templates/README.md](templates/README.md): plantillas mínimas

## Estructura Del Repo

```text
.
|-- AGENTS.md
|-- GEMINI.md
|-- adapters/
|-- agents/
|-- checklists/
|-- context/
|-- creators/
|-- distribution/
|-- gemini-extension.json
|-- package.json
|-- plugins/
|-- rules/
|-- runbooks/
|-- skills/
|-- specs/
|-- templates/
|-- LICENSE
`-- README.md
```
