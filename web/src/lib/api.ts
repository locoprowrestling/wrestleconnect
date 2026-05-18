import "server-only";

import { z } from "zod";

const API_BASE_URL = process.env.CONTENT_API_BASE_URL;

interface FetchContentOptions<T> {
  endpoint: string;
  schema: z.ZodType<T>;
  fallback: () => Promise<T> | T;
  revalidate?: number;
}

export async function fetchContent<T>({
  endpoint,
  schema,
  fallback,
  revalidate = 60,
}: FetchContentOptions<T>): Promise<T> {
  if (!API_BASE_URL) {
    const fallbackData = await fallback();
    return schema.parse(fallbackData);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      next: { revalidate },
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${endpoint}: ${response.status}`);
    }

    const data = await response.json();
    return schema.parse(data);
  } catch (error) {
    console.warn(
      `[content] Falling back to local data for ${endpoint} due to error:`,
      error,
    );
    const fallbackData = await fallback();
    return schema.parse(fallbackData);
  }
}
