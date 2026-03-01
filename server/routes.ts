import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { sendLeadNotificationEmail } from "./sendgrid";
import { sendLeadNotificationSms } from "./twilio";

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {
  app.post("/api/leads", async (req, res) => {
    try {
      const leadData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(leadData);

      sendLeadNotificationEmail(leadData).catch(console.error);
      sendLeadNotificationSms().catch(console.error);

      res.json(lead);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/api/leads", async (_req, res) => {
    try {
      const allLeads = await storage.getLeads();
      res.json(allLeads);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  return httpServer;
}
