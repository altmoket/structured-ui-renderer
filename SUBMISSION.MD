# Submission Code Challenge

## Assumptions & Priorities

### Priority order

- Ensure the default data payload renders without runtime errors.
- Fix data inconsistencies that caused crashes (e.g. nullable fields, mixed shapes).
- Introduce a normalization layer to standardize incoming data.
- Define explicit TypeScript types for each section.
- Implement a fallback (UnknownSection) for unsupported or malformed data.

### Explicit out-of-scope

- Exhaustive validation for all possible malformed inputs.
- Full UI support for all fixture scenarios (partial support is provided via normalization).
- UI/UX improvements beyond basic rendering.
- Performance optimizations.
- Full support for newly introduced section types with incomplete specifications (e.g. `callout`).

### With more time

- Introduce schema validation (e.g. runtime validation layer).
- Add unit and integration tests.
- Improve fallback UX for unknown sections (better messaging or logging).

## Reflective Questions

### What did you change and why?

The original implementation assumed consistent data shapes, which caused runtime errors when encountering null or mixed structures (e.g. items being null or heterogeneous).

I introduced a normalization step to standardize incoming data before rendering. This reduced conditional complexity in components and made rendering predictable. The normalization layer also acts as a compatibility bridge for legacy data shapes.

I also refactored the rendering logic into a more extensible structure and added an UnknownSection fallback to safely handle unsupported types.

Rendering logic was structured in a way that decouples section type handling, making it easier to introduce new section types without modifying existing ones.

### What would you improve next?

- Add a proper validation layer to catch malformed data earlier.
- Improve type safety between raw input and normalized data.
- Expand support for more edge cases in section structures.

### How would you scale this if the number of section types grew ~10×?

I would rely on a registry-based rendering system (type → component) to keep the system modular.

Each section type would live in its own module, allowing independent development and reducing coupling. For larger scale, lazy loading or code-splitting could be introduced.

### How did you handle unknown/invalid data?

Invalid or inconsistent data is normalized before rendering.

For unsupported section types, I implemented an UnknownSection fallback instead of throwing errors. This ensures the UI remains stable and avoids runtime crashes.

Additionally, normalization covers several edge cases from the provided fixtures:

- Missing `sections` -> safely defaults to an empty array.
- Empty or invalid `title` → replaced with a fallback value.
- Legacy fields (e.g. `body` instead of `content`) → migrated during normalization.
- Mixed or invalid list items → coerced into a consistent structure.

This ensures the UI remains stable even when handling partially defined or legacy payloads.

Some section types (e.g. `callout`) were treated as unsupported due to incomplete or evolving specifications. These are handled via the fallback mechanism to ensure the UI remains stable while avoiding premature assumptions about their final structure.

Text content is rendered using React’s default escaping, preventing XSS issues without additional handling.

Duplicate `id` fields are not relied upon for React keys; instead, index-based or derived keys are used to avoid collisions in rendering.

### How would you test this?

**Unit tests:**

- `normalizeSection` with different malformed inputs
- `normalizeData` with missing fields
- Each section renderer with valid normalized input

**Integration tests:**

- Rendering the default payload end-to-end
- Rendering payloads with unknown and mixed section types

**Edge cases:**

- Null or missing fields
- Mixed data shapes
- Unknown section types

The focus would be on ensuring normalization guarantees predictable rendering across all supported and edge-case inputs.

### Which decision would you revisit first?

The normalization strategy.

While it simplifies rendering and improves resilience, it centralizes complexity in one layer. As the number of supported shapes grows, this could become harder to maintain without introducing a formal schema or validation system.

### Did you use AI tools?

Yes — AI tools (e.g. ChatGPT, Copilot) were used to validate ideas and improve structure. Also for writing this document. Final implementation decisions and adjustments were made manually.
