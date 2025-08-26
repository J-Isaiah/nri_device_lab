type DevicePageProps = {
  params: Promise<{ id: string }>;
};
export default async function DeviceDetailPage({ params }: DevicePageProps) {
  const { id } = await params;
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Device Detail</h1>
      <p>Showing details for device ID:{id} </p>
    </div>
  );
}
