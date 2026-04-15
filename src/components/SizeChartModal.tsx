import { useState } from "react";

const sizeData = [
  { size: "44–46", chest: "88–92", waist: "76–80", hips: "94–98" },
  { size: "48–50", chest: "96–100", waist: "84–88", hips: "102–106" },
  { size: "52–54", chest: "104–108", waist: "92–96", hips: "110–114" },
  { size: "56–58", chest: "112–116", waist: "100–104", hips: "118–122" },
  { size: "60–62", chest: "120–124", waist: "108–112", hips: "126–130" },
];

const heightData = [
  { height: "170–176", forHeight: "170–176 см" },
  { height: "182–188", forHeight: "182–188 см" },
];

export function SizeChartModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 text-sm text-cta hover:text-cta-hover font-medium underline underline-offset-4 transition-colors"
      >
        📏 Таблиця розмірів
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-fade-in" onClick={() => setOpen(false)}>
          <div
            className="bg-card rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-auto animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b border-border">
              <h3 className="font-bold text-lg text-card-foreground">Таблиця розмірів</h3>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-card-foreground p-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="p-5">
              <h4 className="font-semibold mb-3 text-sm text-card-foreground">Розміри (см)</h4>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="px-3 py-2 text-left font-semibold text-card-foreground">Розмір</th>
                      <th className="px-3 py-2 text-left font-semibold text-card-foreground">Груди</th>
                      <th className="px-3 py-2 text-left font-semibold text-card-foreground">Талія</th>
                      <th className="px-3 py-2 text-left font-semibold text-card-foreground">Стегна</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeData.map((r) => (
                      <tr key={r.size} className="border-b border-border">
                        <td className="px-3 py-2 font-medium text-card-foreground">{r.size}</td>
                        <td className="px-3 py-2 text-muted-foreground">{r.chest}</td>
                        <td className="px-3 py-2 text-muted-foreground">{r.waist}</td>
                        <td className="px-3 py-2 text-muted-foreground">{r.hips}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h4 className="font-semibold mb-3 text-sm text-card-foreground">Зріст</h4>
              <div className="flex gap-3">
                {heightData.map((h) => (
                  <span key={h.height} className="bg-muted px-4 py-2 rounded-lg text-sm font-medium text-card-foreground">{h.forHeight}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
