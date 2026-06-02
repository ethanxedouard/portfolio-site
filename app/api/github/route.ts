import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const user = searchParams.get("user");

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          user(login: "${user}") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                  }
                }
              }
            }
          }
        }
      `,
    }),
  });

  const json = await res.json();

  const calendar =
    json?.data?.user?.contributionsCollection?.contributionCalendar;

  return NextResponse.json({
    weeks: calendar?.weeks ?? [],
    total: calendar?.totalContributions ?? 0,
  });
}