import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const user = searchParams.get("user");

  if (!process.env.GITHUB_TOKEN) {
    console.error("GITHUB_TOKEN is missing from env");
  }

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

  // TEMP: log the raw response so we can see errors GitHub sends back
  console.log("GitHub API status:", res.status);
  console.log("GitHub API response:", JSON.stringify(json, null, 2));

  const calendar =
    json?.data?.user?.contributionsCollection?.contributionCalendar;

  return NextResponse.json({
    weeks: calendar?.weeks ?? [],
    total: calendar?.totalContributions ?? 0,
  });
}