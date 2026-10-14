export const META_PIXEL_ID = "3495231380761085";

type Fbq = (command: "track", event: string, params?: Record<string, unknown>) => void;

// Only fires if the pixel was loaded (i.e. the visitor accepted cookies).
export function trackMetaEvent(event: string, params?: Record<string, unknown>) {
  const fbq = (window as unknown as { fbq?: Fbq }).fbq;
  if (typeof fbq === "function") {
    fbq("track", event, params);
  }
}
