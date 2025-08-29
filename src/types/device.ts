export type Device = {
  device_id: string;
  location: string;
  status: string;
  model: string;
  device_nickname: string;
  last_updated_at: string;
  last_updated_by?: {
    id: string;
    email: string;
  } | null;
};
