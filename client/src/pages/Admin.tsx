import { useQuery } from "@tanstack/react-query";
import type { Lead } from "@shared/schema";
import Navbar from "@/components/layout/Navbar";

export default function Admin() {
  const { data: leads, isLoading, error } = useQuery<Lead[]>({
    queryKey: ["/api/leads"],
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-16 container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-2" data-testid="text-admin-title">Lead Submissions</h1>
          <p className="text-muted-foreground mb-8">All contact form submissions from your website.</p>

          {isLoading && (
            <div className="text-center py-12 text-muted-foreground">Loading submissions...</div>
          )}

          {error && (
            <div className="text-center py-12 text-destructive">Failed to load submissions.</div>
          )}

          {leads && leads.length === 0 && (
            <div className="text-center py-12 text-muted-foreground border border-dashed border-border rounded-xl">
              No submissions yet.
            </div>
          )}

          {leads && leads.length > 0 && (
            <div className="space-y-4">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  data-testid={`card-lead-${lead.id}`}
                  className="bg-white rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-foreground" data-testid={`text-lead-name-${lead.id}`}>{lead.name}</h3>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                          lead.status === "new" 
                            ? "bg-primary/10 text-primary" 
                            : "bg-muted text-muted-foreground"
                        }`} data-testid={`text-lead-status-${lead.id}`}>
                          {lead.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span data-testid={`text-lead-email-${lead.id}`}>{lead.email}</span>
                        <span data-testid={`text-lead-phone-${lead.id}`}>{lead.phone}</span>
                      </div>
                      <p className="text-foreground/80 leading-relaxed" data-testid={`text-lead-message-${lead.id}`}>{lead.message}</p>
                    </div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap" data-testid={`text-lead-date-${lead.id}`}>
                      {new Date(lead.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
