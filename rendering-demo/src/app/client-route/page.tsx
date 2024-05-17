"use client";

import { useTheme } from "@/components/theme-provider";

export default function ClientRoute() {
  const theme = useTheme();
  return (
    <h1 style={{
      color: theme.colors.secondary
    }}>Client route</h1>
  )
}