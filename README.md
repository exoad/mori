# Mori
Know when you die and what you have left

---

## Countdown expectations!

Do you want to suggest a new measure of expectation? Take a look at [`src/expectations.ts`](src/expectations.ts) to see some already baked in
examples and make sure that your suggestion isn't already there.

A good expectation is one that is applicable to almost all people and shouldn't be just for you. If you want to return a number use `calc`, if you want to return a yes or no, use `check`!

### Format

Each metric is an object with four properties. Use calc OR check for the value.

- `label: string` The display text for the metric (e.g., "Heartbeats left").

- `comment: string` A brief note on how you're measuring it.

- `calc: (secondsLeft: number) => number` Use this to return a number. You get the user's remaining seconds to make your calculation.

- `check: (deathDate: Date, birthdate: string) => boolean` Use this to return a "Yes" or "No". You get the user's deathDate and birthdate to make your comparison.

### Examples

**Computing numerical values**

```typescript
{
    label: "books left to read",
    calc: (s) => Math.floor((s / 31536000) * 12),
    comment: "assuming 1 book per month (12 per year)",
},
```

> `calc: (s) => ...` : This is the math. `(s / 31536000)` gets the years left, and `* 12` gets the total books.

**Checking if a user will see 2077**

```typescript
{
    label: "Will you live to see the year 2077?",
    check: (d) => d.getFullYear() > 2077,
    comment: "Checks if your death year is after 2077.",
},
```

> `check: (d) => ...`: This is the logic. `d.getFullYear() > 2077` checks if the deathDate `(d)` is past 2077.


## Running it yourself

Make sure you have NodeJS installed.

```bash
npm i && npm run dev
```

