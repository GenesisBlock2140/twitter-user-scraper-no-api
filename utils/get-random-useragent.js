import { userAgent } from "../user-agent.js";

export function getRandomUserAgent() {
  const randomIndex = Math.floor(Math.random() * userAgent.length);
  return userAgent[randomIndex];
}