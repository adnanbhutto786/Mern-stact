function Dashboard() {
  return (
    <div className="min-h-[calc(100vh-5rem)] bg-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-blue-600 font-semibold mb-2">
              Dashboard
            </p>
            <h1 className="text-4xl font-bold text-slate-900">Welcome back, Admin</h1>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Review your vehicle inventory, manage listings, and track customer requests from one place.
            </p>
          </div>
          <button className="rounded-3xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition">
            Add New Vehicle
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-10">
          <div className="rounded-3xl bg-white p-7 shadow-lg border border-slate-200">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Active Listings</p>
            <p className="mt-4 text-4xl font-bold text-slate-900">24</p>
            <p className="mt-2 text-slate-500">Cars currently available for sale.</p>
          </div>
          <div className="rounded-3xl bg-white p-7 shadow-lg border border-slate-200">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">New Requests</p>
            <p className="mt-4 text-4xl font-bold text-slate-900">7</p>
            <p className="mt-2 text-slate-500">Customer inquiries waiting for review.</p>
          </div>
          <div className="rounded-3xl bg-white p-7 shadow-lg border border-slate-200">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Total Sales</p>
            <p className="mt-4 text-4xl font-bold text-slate-900">$248K</p>
            <p className="mt-2 text-slate-500">Revenue generated this month.</p>
          </div>
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-slate-900">Recent Vehicle Listings</h2>
              <span className="text-sm text-slate-500">Updated 2 hours ago</span>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl border border-slate-200 p-4">
                <p className="font-semibold text-slate-900">BMW M5</p>
                <p className="text-sm text-slate-500">2025 • $80,000</p>
              </div>
              <div className="rounded-3xl border border-slate-200 p-4">
                <p className="font-semibold text-slate-900">Honda Civic</p>
                <p className="text-sm text-slate-500">2024 • $30,000</p>
              </div>
              <div className="rounded-3xl border border-slate-200 p-4">
                <p className="font-semibold text-slate-900">Audi A6</p>
                <p className="text-sm text-slate-500">2025 • $65,000</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-5">Quick Actions</h2>
            <div className="space-y-4">
              <button className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-left hover:border-blue-300 transition">
                <p className="font-semibold text-slate-900">Manage Inventory</p>
                <p className="text-sm text-slate-500 mt-1">Edit existing car listings.</p>
              </button>
              <button className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-left hover:border-blue-300 transition">
                <p className="font-semibold text-slate-900">View Leads</p>
                <p className="text-sm text-slate-500 mt-1">See incoming buyer messages.</p>
              </button>
              <button className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-left hover:border-blue-300 transition">
                <p className="font-semibold text-slate-900">Sales Report</p>
                <p className="text-sm text-slate-500 mt-1">Download monthly performance.</p>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;