// Generate static params for static export
export async function generateStaticParams() {
  // Generate some sample campaign IDs for static export
  const campaignIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  
  return campaignIds.map((id) => ({
    id: id,
  }));
}

export default function CampaignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
