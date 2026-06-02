"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

const LIGHT = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
const DARK  = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];

type Week = {
  contributionDays: {
    contributionCount: number;
  }[];
};

export function GitHubHeatmap() {
  const { theme } = useTheme();
  const colors = theme === "dark" ? DARK : LIGHT;

  const [weeks, setWeeks] = useState<Week[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/github?user=ethanxedouard");
      const data = await res.json();

      setWeeks(data?.weeks ?? []);
      setTotal(data?.total ?? 0);
    }

    load();
  }, []);

  if (!weeks.length) return null;

  return (
    <div
      className="rounded-[10px] p-5"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow)",
      }}
    >
      {/* GRID */}
      <div className="flex gap-[3px] overflow-x-auto pb-1">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.contributionDays.map((day, di) => {
              const c = day.contributionCount;

              let level = 0;
              if (c > 0) level = 1;
              if (c >= 3) level = 2;
              if (c >= 6) level = 3;
              if (c >= 10) level = 4;

              return (
                <div
                  key={di}
                  className="w-[11px] h-[11px] rounded-[2px] transition-transform hover:scale-150"
                  style={{ background: colors[level] }}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="flex justify-between mt-3">
        <div className="flex gap-1 items-center">
          <span style={{ fontSize: 10 }}>Less</span>
          {colors.map((c, i) => (
            <div key={i} className="w-[11px] h-[11px]" style={{ background: c }} />
          ))}
          <span style={{ fontSize: 10 }}>More</span>
        </div>

        <span style={{ fontSize: 11 }}>
          {total.toLocaleString()} contributions in the last year
        </span>
      </div>
    </div>
  );
}