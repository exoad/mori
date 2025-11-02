# Mori
Know when you die and what you have left

---

## Countdown expectations!

Do you want to suggest a new measure of expectation? Take a look at [`src/expectations.ts`](src/expectations.ts) to see some already baked in
examples and make sure that your suggestion isn't already there.

A good expectation is one that is applicable to almost all people and shouldn't be just for you. If you want to return a number use `calc`, if you want to return a yes or no, use `check`!

### Format

- `calc` property allows you to receive a seconds parameter which you can use to return a specific numerical value back
- `label` What is the text shown for this entry?
- `comment` How is this measured or just a simple blurb (best to put something for consistency!)