# Automated Tests

## Test Framework

Vitest

Run all tests:

```bash
npx vitest run
```

---

## Test Coverage

### __tests__/auditEngine.test.ts

#### 1. Detects overspending for small teams
Ensures audit engine identifies expensive enterprise plans for small teams.

#### 2. Optimizes ChatGPT plans
Validates downgrade recommendations for single-user Team subscriptions.

#### 3. Calculates annual savings correctly
Confirms yearly savings calculations are accurate.

#### 4. Returns correct tool metadata
Verifies audit output structure integrity.

#### 5. Ensures optimized spend is lower
Prevents invalid optimization calculations.