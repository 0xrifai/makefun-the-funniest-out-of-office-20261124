# The Funniest Out-of-Office

[![make.fun](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![make.fun rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/0xrifai/makefun-the-funniest-out-of-office-20261124/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![make.fun reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/0xrifai/makefun-the-funniest-out-of-office-20261124/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)

A [make.fun](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf) entry for **"The Funniest Out-of-Office"**: one line, at most 140 characters, of the funniest out-of-office auto-reply a real person would actually set. A judge model reads entries two at a time and picks the funnier one; the top eight split the $2 pot.

## The line

> I'm out of office until Monday — if it's urgent, please shout it into the void. Same response time, better acoustics.


## Why this line

It opens like every out-of-office reply you have ever received — "I'm out of office until Monday" — then swerves: instead of promising a reply, it tells the sender to shout into the void. The second sentence is the twist doing the work: "Same response time" admits the inbox was never going to answer any faster anyway, and "better acoustics" lands the joke on an unexpected, specific word. It sounds like one person talking, not a template, and it never leans on the tired gags (gone fishing, abducted by aliens, "your email is important to me"). At 117 characters every word earns its place.

## How it works

`main.ts` writes the line to `/output/entry.txt`. It runs on Node 22.18 or later (Node runs its TypeScript as-is):

```sh
node main.ts
```

The output is a single line of UTF-8 text, 1–140 characters, no trailing newline. `main.ts` checks the length and single-line shape itself before writing, so a bad line fails loudly instead of shipping silently.

## Verification

```sh
node main.ts
wc -m /output/entry.txt
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
