export default function PaymentOptions() {
  const items = [
    { name: "Visa" },
    { name: "Mastercard" },
    { name: "AmEx" },
    { name: "PayPal" },
    { name: "Stripe" },
  ];

  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500">
          {items.map((i) => (
            <div key={i.name} className="rounded-md border border-slate-200 bg-white/70 px-4 py-2 shadow-sm text-sm">
              {i.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
