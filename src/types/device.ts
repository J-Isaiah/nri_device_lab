export type Device = {
  device_id: string; // primary key (UUID or text)
  location: string; // e.g., "Lab 1"
  status: string; // e.g., "online", "offline"
  model: string; // e.g., "ESP32"
  device_nickname: string; // friendly name
  last_updated_at: string; // ISO timestamp
  last_updated_by?: {
    id: string;
    email: string;
  }[];
};
